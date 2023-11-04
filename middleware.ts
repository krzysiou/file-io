import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
import type { Session } from './src/hooks/use-session';

import { config as appConfig } from './src/config/config';

const { sessionCookieName } = appConfig;

const validationPaths = ['/login', '/register'];

export const config = {
  matcher: ['/login', '/register', '/profile/:path*'],
};

const middleware = (request: NextRequest) => {
  const isValidationPath = validationPaths.includes(request.nextUrl.pathname);
  const sessionCookie = request.cookies.get(sessionCookieName)?.value;

  const loginUrl = new URL('/login', request.url);
  const profileUrl = new URL('/profile', request.url);

  const now = Date.now();

  if (!sessionCookie && !isValidationPath) {
    return NextResponse.redirect(loginUrl);
  }

  if (sessionCookie && isValidationPath) {
    return NextResponse.redirect(profileUrl);
  }

  if (sessionCookie && !isValidationPath) {
    const session = JSON.parse(sessionCookie) as Session;

    if (sessionCookie && now > session.expire) {
      const response = NextResponse.redirect(loginUrl);

      request.cookies.delete(sessionCookieName);
      response.cookies.delete(sessionCookieName);

      return response;
    }
  }
};

export { middleware };
