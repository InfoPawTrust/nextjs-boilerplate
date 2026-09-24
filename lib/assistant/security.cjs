const {createHmac, randomUUID, timingSafeEqual}=require('node:crypto');

class HttpError extends Error {
  constructor(status, message) { super(message); this.status=status; }
}
const COOKIE='pt_assistant';
function signature(value, key) {
  return createHmac('sha256', key).update('pawtrust-assistant-v1\0'+value).digest('base64url');
}
function sign(data, key) {
  const value=Buffer.from(JSON.stringify(data)).toString('base64url');
  return value+'.'+signature(value,key);
}
function verify(token, key, now=Date.now()) {
  if(typeof token!=='string'||token.length>2048) return null;
  const [value, supplied, extra]=token.split('.');
  if(!value||!supplied||extra||!/^[A-Za-z0-9_-]{43}$/.test(supplied)) return null;
  const expected=signature(value,key);
  if(supplied.length!==expected.length||!timingSafeEqual(Buffer.from(supplied),Buffer.from(expected))) return null;
  try { const data=JSON.parse(Buffer.from(value,'base64url').toString()); return Number.isFinite(data.exp)&&data.exp>now?data:null; } catch { return null; }
}
function owner(request, key, now) {
  const token=request.headers.get('cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith(COOKIE+'='))?.slice(COOKIE.length+1);
  const data=verify(token,key,now);
  return data?.kind==='owner'&&typeof data.id==='string'?data.id:null;
}
function issueOwner(key, now=Date.now(), secure=true) {
  const id=randomUUID();
  const token=sign({kind:'owner',id,exp:now+86400000},key);
  return {id,cookie:`${COOKIE}=${token}; HttpOnly; SameSite=Strict; Path=/api/assistant; Max-Age=86400${secure?'; Secure':''}`};
}
function checkOrigin(request, env) {
  const allowed=new Set(['https://www.pawtrust.de','https://pawtrust.de']);
  if(env.VERCEL_ENV==='preview'&&env.VERCEL_URL) allowed.add('https://'+env.VERCEL_URL);
  if(env.VERCEL_ENV==='preview'&&env.VERCEL_BRANCH_URL) allowed.add('https://'+env.VERCEL_BRANCH_URL);
  for(const value of (env.ASSISTANT_ALLOWED_ORIGINS||'').split(',')) {
    if(value.trim().startsWith('https://')) allowed.add(value.trim());
  }
  if(!env.VERCEL&&env.ASSISTANT_LOCAL_TEST==='1') allowed.add('http://127.0.0.1:3107');
  if(!allowed.has(request.headers.get('origin'))) throw new HttpError(403,'Diese Anfrage ist nicht erlaubt.');
  if(request.headers.get('sec-fetch-site')==='cross-site') throw new HttpError(403,'Diese Anfrage ist nicht erlaubt.');
}
function clientHash(request, env, key, now=Date.now()) {
  // Vercel replaces x-forwarded-for at its edge; do not trust it on other hosts.
  const ip=env.VERCEL?request.headers.get('x-forwarded-for')?.split(',')[0].trim():env.ASSISTANT_LOCAL_TEST==='1'?'127.0.0.1':null;
  if(!ip||ip.length>64) throw new HttpError(503,'Der KI-Dienst ist noch nicht bereit.');
  return signature(`${Math.floor(now/86400000)}:${ip}`,key);
}
async function readJson(request, limit=85000) {
  if(Number(request.headers.get('content-length')||0)>limit) throw new HttpError(413,'Die Anfrage ist zu groß.');
  const reader=request.body?.getReader();
  if(!reader) throw new HttpError(400,'Die Anfrage ist unvollständig.');
  let size=0; const chunks=[];
  try { while(true) { const {done,value}=await reader.read(); if(done) break; size+=value.byteLength; if(size>limit) { await reader.cancel(); throw new HttpError(413,'Die Anfrage ist zu groß.'); } chunks.push(Buffer.from(value)); } }
  finally { reader.releaseLock(); }
  try { const data=JSON.parse(Buffer.concat(chunks).toString('utf8')); if(!data||Array.isArray(data)||typeof data!=='object') throw Error(); return data; }
  catch { throw new HttpError(400,'Die Anfrage ist ungültig.'); }
}
module.exports={HttpError,sign,verify,owner,issueOwner,checkOrigin,clientHash,readJson};
