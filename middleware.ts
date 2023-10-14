import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
import type { Session } from './src/hooks/use-session';

import { COOKIE_NAME } from './src/hooks/use-session';

const forwardRoutes = ['/login', '/register'];

export const config = {
  matcher: ['/login', '/register', '/user/:path*'],
};

const middleware = (request: NextRequest) => {
  const isOpenPath = forwardRoutes.includes(request.nextUrl.pathname);
  const sessionCookie = request.cookies.get(COOKIE_NAME)?.value;

  const redirectToLogin = new URL('/login', request.url);
  const redirectToUser = new URL('/user', request.url);

  const now = Date.now();

  if (!sessionCookie) {
    if (!isOpenPath) {
      return NextResponse.redirect(redirectToLogin);
    } else {
      return;
    }
  }

  const session = JSON.parse(sessionCookie) as Session;

  if (isOpenPath && sessionCookie) {
    return NextResponse.redirect(redirectToUser);
  }
  if (!isOpenPath && now > session.expire) {
    const response = NextResponse.redirect(redirectToLogin);

    request.cookies.delete(COOKIE_NAME);
    response.cookies.delete(COOKIE_NAME);

    return response;
  }
};

export { middleware };
