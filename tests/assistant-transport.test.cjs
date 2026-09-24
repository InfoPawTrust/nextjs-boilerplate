const {test}=require('node:test');
const assert=require('node:assert/strict');
const transport=import('../app/tarifrechner/assistantTransport.ts');
test('NDJSON handles split packets, heartbeat and confirmed server end',async()=>{
  const {readVoiceConnection}=await transport;
  let controller,closed=0;
  const response=new Response(new ReadableStream({start(c){controller=c;}}),{headers:{'Content-Type':'application/x-ndjson'}});
  const encode=s=>new TextEncoder().encode(s);
  const ready=readVoiceConnection(response,()=>{closed++;});
  controller.enqueue(encode('{"type":"rea'));
  controller.enqueue(encode('dy","sdp":"answer","id":"ticket","seconds":240}\n{"type":"heartbeat"}\n'));
  assert.deepEqual(await ready,{type:'ready',sdp:'answer',id:'ticket',seconds:240});
  controller.enqueue(encode('{"type":"closed","confirmed":true}\n'));controller.close();
  await new Promise(resolve=>setImmediate(resolve));assert.equal(closed,1);
});
test('loss of monitor response also ends the browser conversation',async()=>{
  const {readVoiceConnection}=await transport;let closed=0,controller;
  const response=new Response(new ReadableStream({start(c){controller=c;c.enqueue(new TextEncoder().encode('{"type":"ready","sdp":"a","id":"t"}\n'));}}),{headers:{'Content-Type':'application/x-ndjson'}});
  await readVoiceConnection(response,()=>{closed++;});controller.error(Error('network disconnected'));
  await new Promise(resolve=>setImmediate(resolve));assert.equal(closed,1);
});
test('private preview JSON remains compatible and errors are readable',async()=>{
  const {readVoiceConnection}=await transport;
  assert.deepEqual(await readVoiceConnection(Response.json({id:'test',sdp:'answer'}),()=>{}),{id:'test',sdp:'answer'});
  await assert.rejects(readVoiceConnection(Response.json({error:'Kontingent erreicht'},{status:429}),()=>{}),/Kontingent erreicht/);
});
