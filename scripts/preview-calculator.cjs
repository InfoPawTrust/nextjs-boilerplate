// Private loopback-only preview. Never deploy this unauthenticated preview server.
process.env.PAWTRUST_CALCULATOR_PREVIEW='1';
process.chdir(require('node:path').resolve(__dirname,'..'));
const http=require('node:http');
const next=require('next');
const {createAssistant}=require('./calculator-assistant.cjs');
const port=3106,host='127.0.0.1',origin=`http://${host}:${port}`;
const app=next({dev:false,hostname:host,port});const handle=app.getRequestHandler();const assistant=createAssistant();
app.prepare().then(()=>http.createServer((req,res)=>{if(req.headers.host!==`${host}:${port}`){res.writeHead(403);return res.end('Invalid host')}if(req.url?.startsWith('/api/assistant/')){if(req.method==='POST'&&req.headers.origin!==origin){res.writeHead(403);return res.end('Invalid origin')}return assistant(req,res)}return handle(req,res)}).listen(port,host,()=>console.log(`Calculator preview: ${origin}/tarifrechner | assistant configured: ${!!process.env.OPENAI_API_KEY}`)));
