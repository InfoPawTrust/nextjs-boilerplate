'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {Arrow} from './Brand';
import {SupportButton} from './SupportDialog';

export function QuoteButton(){if((process.env.NEXT_PUBLIC_CALCULATOR_ENABLED==='1'||process.env.NEXT_PUBLIC_CALCULATOR_PREVIEW==='1'))return <Link className="pt-button pt-button-primary" href="/tarifrechner?tier=katze">Beitrag berechnen <Arrow/></Link>;return <button className="pt-button pt-button-primary pt-quote-pending" disabled title="Der Online-Rechner wird noch angebunden">Beitrag berechnen <Arrow/></button>}
export function ProductActions({hero=false}:{hero?:boolean}){return <div className="pt-action-block" id={hero?'hero-actions':undefined}><div className="pt-action-group"><QuoteButton/><SupportButton label="Kostenlose Beratung" variant="secondary"/></div></div>}
export function StickyQuoteBar(){const [visible,setVisible]=useState(false);useEffect(()=>{const hero=document.getElementById('hero-actions');if(!hero)return;const observer=new IntersectionObserver(([entry])=>setVisible(!entry.isIntersecting&&entry.boundingClientRect.bottom<0));observer.observe(hero);return()=>observer.disconnect()},[]);return <div className={`pt-mobile-quote ${visible?'is-visible':''}`} inert={!visible} aria-hidden={!visible}><QuoteButton/></div>}
