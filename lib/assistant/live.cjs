const WebSocket=require('ws');

// No session map: any Vercel instance can close a session using its signed ticket.
function attach(id,key,Socket=WebSocket) {
  return new Socket(`wss://api.openai.com/v1/live/sessions/${encodeURIComponent(id)}/attach`,{
    headers:{Authorization:`Bearer ${key}`},handshakeTimeout:7000,maxPayload:1048576,
  });
}
function closeSession(id,key,Socket=WebSocket) {
  return new Promise(resolve=>{
    const socket=attach(id,key,Socket);
    let settled=false;
    const finish=confirmed=>{if(settled)return;settled=true;clearTimeout(timeout);socket.terminate();resolve(confirmed);};
    const timeout=setTimeout(()=>finish(false),10000);
    socket.on('open',()=>socket.send(JSON.stringify({type:'session.close'})));
    socket.on('message',raw=>{try{if(JSON.parse(raw).type==='session.closed')finish(true);}catch{}});
    socket.on('error',()=>finish(false));
    socket.on('close',()=>finish(false));
  });
}
function updateSession(id,key,event,Socket=WebSocket) {
  return new Promise(resolve=>{
    const socket=attach(id,key,Socket);let settled=false;
    const eventId=require('node:crypto').randomUUID();
    const finish=ok=>{if(settled)return;settled=true;clearTimeout(timeout);socket.terminate();resolve(ok);};
    const timeout=setTimeout(()=>finish(false),8000);
    socket.on('open',()=>socket.send(JSON.stringify({...event,event_id:eventId})));
    socket.on('message',raw=>{try{const item=JSON.parse(raw);if(item.client_event_id===eventId&&item.type.endsWith('.appended'))finish(true);}catch{}});
    socket.on('error',()=>finish(false));socket.on('close',()=>finish(false));
  });
}
function monitorSession(id,key,{Socket=WebSocket,durationMs=240000,onFinal=()=>{}}={}) {
  const socket=attach(id,key,Socket);
  let settled=false,closing=false,closeTimer,deadline,delegations=0;
  let readyResolve,readyReject,doneResolve;
  const ready=new Promise((resolve,reject)=>{readyResolve=resolve;readyReject=reject;});
  const done=new Promise(resolve=>{doneResolve=resolve;});
  const opening=setTimeout(()=>{readyReject(Error('Sideband unavailable'));void recover();},8000);
  function finish(confirmed,reason) {
    if(settled)return;
    settled=true;clearTimeout(opening);clearTimeout(deadline);clearTimeout(closeTimer);
    socket.terminate();
    const result={confirmed,reason};
    onFinal(result);doneResolve(result);
  }
  async function recover() {
    if(settled||closing)return;
    closing=true;
    const confirmed=await closeSession(id,key,Socket);
    finish(confirmed,'connection_lost');
  }
  function close(reason='close_requested') {
    if(settled||closing)return done;
    closing=true;
    if(socket.readyState===WebSocket.OPEN)socket.send(JSON.stringify({type:'session.close'}));
    closeTimer=setTimeout(async()=>finish(await closeSession(id,key,Socket),reason),8000);
    return done;
  }
  socket.on('open',()=>{clearTimeout(opening);readyResolve();deadline=setTimeout(()=>close('duration_limit'),durationMs);});
  socket.on('message',raw=>{
    let event;try{event=JSON.parse(raw);}catch{return;}
    if(event.type==='session.closed')finish(true,event.reason||'close_requested');
    if(event.type==='response.event'&&event.event?.type==='response.created'&&++delegations>=12)close('delegation_limit');
  });
  socket.on('error',()=>{readyReject(Error('Sideband unavailable'));void recover();});
  socket.on('close',()=>{readyReject(Error('Sideband closed'));void recover();});
  return {ready,done,close};
}
module.exports={closeSession,monitorSession,updateSession};
