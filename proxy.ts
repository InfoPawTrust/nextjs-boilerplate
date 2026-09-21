import { NextRequest, NextResponse } from 'next/server';
// Preserve archived site code while exposing only the launch pages.
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/')) return NextResponse.json({ message: 'PawTrust befindet sich im Aufbau. Es werden keine Anfragen entgegengenommen.' }, { status: 410 });
  const target = request.nextUrl.clone(); target.pathname = '/'; target.search = '';
  return NextResponse.redirect(target, 307);
}
export const config = { matcher: ['/hundekrankenversicherung/:path*', '/katzenkrankenversicherung/:path*', '/faq/:path*', '/ratgeber/:path*', '/ueber-uns/:path*', '/funnel/:path*', '/angebot/:path*', '/partnerliste/:path*', '/cookie-einstellungen/:path*', '/api/:path*'] };
