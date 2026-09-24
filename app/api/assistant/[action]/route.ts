import {after} from 'next/server';
import {createService} from '../../../../lib/assistant/service.cjs';

export const runtime='nodejs';
export const dynamic='force-dynamic';
export const maxDuration=300;

const service=createService();
async function handler(request:Request,{params}:{params:Promise<{action:string}>}) {
  const {action}=await params;
  return service.handle(request,action,(work:Promise<unknown>)=>after(async()=>{await work;}));
}
export {handler as GET,handler as POST};
