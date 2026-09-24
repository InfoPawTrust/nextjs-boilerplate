const {randomUUID}=require('node:crypto');
const {HttpError}=require('./security.cjs');

// One atomic decision covers every counter and the per-browser concurrency lock.
// Failed/uncertain provider calls still consume quota. Never refund on network errors.
const RESERVE=`
local n = tonumber(ARGV[1])
local lock = KEYS[n+1]
if redis.call('EXISTS',lock)==1 then return 2 end
for i=1,n do
  if tonumber(redis.call('GET',KEYS[i]) or '0') >= tonumber(ARGV[2*i]) then return 1 end
end
for i=1,n do
  local count=redis.call('INCR',KEYS[i])
  if count==1 then redis.call('EXPIRE',KEYS[i],tonumber(ARGV[2*i+1])) end
end
redis.call('SET',lock,ARGV[2*n+2],'EX',ARGV[2*n+3])
return 0`;
const RELEASE=`if redis.call('GET',KEYS[1])==ARGV[1] then return redis.call('DEL',KEYS[1]) end return 0`;
function createQuota(env, fetcher=fetch) {
  const url=env.UPSTASH_REDIS_REST_URL||env.KV_REST_API_URL;
  const token=env.UPSTASH_REDIS_REST_TOKEN||env.KV_REST_API_TOKEN;
  const configured=!!url&&url.startsWith('https://')&&!!token;
  async function command(args) {
    if(!configured) throw new HttpError(503,'Enzo wird gerade vorbereitet. Bitte versuche es später erneut.');
    const response=await fetcher(url,{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify(args),signal:AbortSignal.timeout(4000),cache:'no-store'});
    if(!response.ok) throw new HttpError(503,'Enzo ist gerade nicht erreichbar. Bitte versuche es später erneut.');
    const data=await response.json(); if(data.error) throw new HttpError(503,'Enzo ist gerade nicht erreichbar.');
    return data.result;
  }
  async function reserve(kind, user, ip, now=Date.now()) {
    const hour=Math.floor(now/3600000), day=Math.floor(now/86400000);
    const prefix='pawtrust:assistant:v1:';
    const caps=kind==='voice'?[3,6,20]:kind==='chat'?[20,40,200]:kind==='control'?[120,240,2000]:[30,30,500];
    const counters=[
      [`${prefix}${kind}:user:${user}:${hour}`,caps[0],3700],
      [`${prefix}${kind}:ip:${ip}:${hour}`,caps[1],3700],
      [`${prefix}${kind}:all:${day}`,caps[2],86500],
    ];
    const lock=`${prefix}${kind}:lock:${user}`;
    const id=randomUUID(), ttl=kind==='voice'?300:kind==='chat'?50:2;
    const result=await command(['EVAL',RESERVE,4,...counters.map(c=>c[0]),lock,3,...counters.flatMap(c=>[c[1],c[2]]),id,ttl]);
    if(result===1) throw new HttpError(429,'Das Gesprächskontingent ist gerade erreicht. Bitte versuche es später erneut.');
    if(result===2) throw new HttpError(409,'Eine Anfrage läuft noch. Bitte warte einen Moment.');
    if(result!==0) throw new HttpError(503,'Enzo ist gerade nicht erreichbar.');
    return async()=>{await command(['EVAL',RELEASE,1,lock,id]);};
  }
  return {configured,reserve};
}
module.exports={createQuota,RESERVE,RELEASE};
