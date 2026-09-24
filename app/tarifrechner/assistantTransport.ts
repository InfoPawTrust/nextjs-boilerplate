// The access cookie is HttpOnly. Neither provider credentials nor the cookie are
// read by JavaScript; a signed voice ticket is kept only for the active call.
export async function ensureAssistantAccess(signal?:AbortSignal) {
  const response=await fetch('/api/assistant/access',{method:'POST',signal});
  if(!response.ok){const data=await response.json();throw Error(data.error||'Enzo ist gerade nicht erreichbar.');}
}
type Ready={id:string;sdp:string;seconds?:number};
export async function readVoiceConnection(response:Response,onClosed:()=>void):Promise<Ready> {
  if(!response.ok){const data=await response.json();throw Error(data.error||'Enzo konnte nicht starten.');}
  // The existing private loopback preview still returns a single JSON object.
  if(!response.headers.get('content-type')?.includes('ndjson'))return response.json();
  const reader=response.body?.getReader();if(!reader)throw Error('Die Verbindung wurde unterbrochen.');
  const decoder=new TextDecoder();let buffer='';let ready:Ready|undefined;
  async function line():Promise<string|null>{
    while(!buffer.includes('\n')){
      const {done,value}=await reader!.read();if(done)return null;
      buffer+=decoder.decode(value,{stream:true});
      if(buffer.length>100000)throw Error('Ungültige Verbindungsantwort.');
    }
    const index=buffer.indexOf('\n'),value=buffer.slice(0,index);buffer=buffer.slice(index+1);return value;
  }
  const first=await line();
  if(first){const data=JSON.parse(first);if(data.type==='ready'&&typeof data.id==='string'&&typeof data.sdp==='string')ready=data;}
  if(!ready){await reader.cancel();throw Error('Enzo konnte die Verbindung nicht vorbereiten.');}
  // Keep the server watchdog invocation alive for this call. A lost monitor
  // connection stops local audio instead of leaving an unobserved conversation.
  void (async()=>{try{while(true){const value=await line();if(value===null||JSON.parse(value).type==='closed')break;}}catch{}finally{reader.releaseLock();onClosed();}})();
  return ready;
}
