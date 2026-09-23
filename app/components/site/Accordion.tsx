'use client';
import {useId,useState} from 'react';
export function Accordion({title,children}:{title:string;children:React.ReactNode}){const [open,setOpen]=useState(false);const id=useId();return <div className={`pt-accordion ${open?'is-open':''}`}><h3><button type="button" aria-expanded={open} aria-controls={id} onClick={()=>setOpen(!open)}>{title}<span className="pt-faq-plus" aria-hidden="true">+</span></button></h3><div id={id} className="pt-collapse" inert={!open}><div><div className="pt-answer">{children}</div></div></div></div>}
