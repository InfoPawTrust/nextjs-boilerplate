import { BrandLogo, QuietFooter } from './components/ComingSoon';
export default function Home() {
  return <div className="launch-page"><main id="inhalt" className="launch-main"><div className="launch-content">
    <p className="launch-badge"><span aria-hidden="true" /> Etwas Gutes kommt.</p>
    <BrandLogo />
    <h1>Für euer Leben<br className="mobile-break" /> zusammen.</h1>
    <p className="launch-description">Wir machen Tierkrankenversicherung verständlich.<br className="desktop-break" /> Für dich. Für deinen Vierbeiner. Für ein gutes Gefühl.</p>
    <p className="launch-note">Unsere neue Website ist bald für euch da.</p>
    <a className="social-link" href="https://www.instagram.com/pawtrustde/" rel="noreferrer">Bis dahin: Folge uns auf Instagram <span aria-hidden="true">↗</span></a>
  </div></main><QuietFooter /></div>;
}
