import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    `/((?!api/|favicon.ico|logo.png|placeholder.svg|empty-state.png|placeholder.png|_next/|_static/|_vercel|[\w-]+\.\w+).*)`,
  ],
}

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl

  const searchParams = request.nextUrl.searchParams.toString()
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`

  if (url.pathname !== '/') {
    return NextResponse.rewrite(new URL(path, request.url))
  }

  return NextResponse.rewrite(
    new URL(`/home${path === '/' ? '' : path}`, request.url),
  )
}
