import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const locale = request.nextUrl.pathname === '/tr' || request.nextUrl.pathname.startsWith('/tr/') ? 'tr' : 'en'
  requestHeaders.set('x-luma-locale', locale)

  return NextResponse.next({
    request: { headers: requestHeaders },
  })
}

export const config = {
  matcher: ['/', '/tr/:path*'],
}
