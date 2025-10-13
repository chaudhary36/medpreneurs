import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  // If user is logged in, redirect from sign-in to home
  if (token && url.pathname.startsWith('/sign-in')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Protected pages: only allow if token exists
  if (
    !token &&
    (
      url.pathname.startsWith('/anuj') ||
      url.pathname.startsWith('/kaish') ||
      url.pathname.startsWith('/krishna') ||
      url.pathname.startsWith('/amit')
    )
  ) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/sign-in',
    '/:path*',
  ],
};
