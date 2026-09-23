import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const dmSans = localFont({ src: '../public/fonts/dm-sans.ttf', variable: '--font-body', display: 'swap', weight: '100 1000' });
const bricolage = localFont({ src: '../public/fonts/bricolage-grotesque.ttf', variable: '--font-heading', display: 'swap', weight: '200 800' });
export const metadata: Metadata = {
  metadataBase: new URL('https://pawtrust.de'),
  title: { default: 'PawTrust – Für euer Leben zusammen.', template: '%s | PawTrust' },
  description: 'Wir machen Tierkrankenversicherung verständlich. Für dich und deinen Vierbeiner. Krankenversicherung und OP-Schutz für Hund und Katze.',
  icons: { icon: '/pawtrust-mark.svg', apple: '/pawtrust-paw.png' },
  openGraph: { title: 'PawTrust – Für euer Leben zusammen.', description: 'Krankenversicherung und OP-Schutz für Hund und Katze.', locale: 'de_DE', type: 'website', images: [{ url: '/pawtrust-wordmark.png', width: 2172, height: 724, alt: 'PawTrust' }] },
};
export const viewport: Viewport = { themeColor: '#FFF5E8' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body className={`${dmSans.variable} ${bricolage.variable}`}><a className="skip-link" href="#inhalt">Zum Inhalt</a>{children}</body></html>;
}
