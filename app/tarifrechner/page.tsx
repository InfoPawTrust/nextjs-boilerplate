import {Suspense} from 'react';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {Calculator} from './Calculator';
import '../home.css';
import './calculator.css';
export const dynamic='force-dynamic';
export const metadata:Metadata={title:'Dein Schutz beginnt hier',robots:{index:false,follow:false}};
export default function CalculatorPage(){if(process.env.NEXT_PUBLIC_CALCULATOR_ENABLED!=='1'&&process.env.PAWTRUST_CALCULATOR_PREVIEW!=='1')notFound();return <Suspense fallback={<p>Dein Rechner wird geladen …</p>}><Calculator/></Suspense>}
