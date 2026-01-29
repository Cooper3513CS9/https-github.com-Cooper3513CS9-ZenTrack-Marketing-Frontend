import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Redirect www.zentrack.nl to zentrack.nl
  if (host.startsWith('www.')) {
    const newHost = host.replace('www.', '')
    const newUrl = new URL(request.nextUrl)
    newUrl.host = newHost
    return NextResponse.redirect(newUrl, {
      status: 301, // Permanent redirect
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
