'use client';
import {useEffect,useRef,useState} from 'react';
import {JoyArc} from './Brand';
export function openSupport(){window.dispatchEvent(new Event('pawtrust-support'));}
export function SupportButton({label="Wir sind für dich da",variant="primary"}:{label?:string;variant?:"primary"|"secondary"}){return <button className={`pt-button pt-support-trigger pt-button-${variant}`} onClick={openSupport}>{label} <span aria-hidden="true">↗</span></button>}
export function SupportDialog(){const ref=useRef<HTMLDialogElement>(null);const timer=useRef<ReturnType<typeof setTimeout>|null>(null);const [closing,setClosing]=useState(false);const focus=useRef<HTMLElement|null>(null);
 useEffect(()=>{const open=()=>{focus.current=document.activeElement as HTMLElement;setClosing(false);ref.current?.showModal();};window.addEventListener('pawtrust-support',open);return()=>{window.removeEventListener('pawtrust-support',open);if(timer.current)clearTimeout(timer.current);}},[]);
 function close(){setClosing(true);timer.current=setTimeout(()=>{ref.current?.close();focus.current?.focus();setClosing(false)},matchMedia('(prefers-reduced-motion: reduce)').matches?0:200)}
 return <dialog ref={ref} className={`pt-support-dialog ${closing?'is-closing':''}`} aria-labelledby="support-heading" onCancel={e=>{e.preventDefault();close()}} onClick={e=>{if(e.target===e.currentTarget)close()}}><div className="pt-support-head"><button className="pt-dialog-close" aria-label="Beratung schließen" onClick={close}>×</button><JoyArc/><p className="pt-eyebrow">Ein offenes Ohr für dich.</p><h2 id="support-heading">Wir sind für dich da.</h2><p>Deine Fragen. In deinem Tempo.</p></div><div className="pt-support-body"><div className="pt-support-tool" aria-label="Platz für das zukünftige Beratungstool"/><p>Unsere Online-Beratung zieht hier bald ein.</p></div></dialog>
}
