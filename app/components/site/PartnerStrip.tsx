import Image from 'next/image';
import {TrustMarquee} from './TrustMarquee';

export function PartnerStrip(){return <section className="pt-shell pt-trust pt-trust-compact" aria-label="Tarifmerkmale"><div><span className="pt-eyebrow">Unser geplanter Tarifpartner</span><Image className="pt-partner-logo" src="/images/barmeniagothaer.svg" alt="BarmeniaGothaer" width={250} height={58}/></div><TrustMarquee/></section>}
