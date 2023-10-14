'use client';

import { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';

const COOKIE_NAME = 'session';
const EXPIRE_DAYS = 7;

type Session = {
  username: string;
  accessToken: string;
  expire: number;
};

const useSession = () => {
  const [session, setSession] = useState<Session>(null);
  const [hasSession, setHasSession] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    const sessionCookie = Cookies.get(COOKIE_NAME);

    if (sessionCookie) {
      setHasSession(true);
      setSession(JSON.parse(sessionCookie));

      return;
    }

    setHasSession(false);
    setSession(null);
  }, [pathname]);

  const login = useCallback((currentSession: Session) => {
    Cookies.set(COOKIE_NAME, JSON.stringify(currentSession), {
      expires: EXPIRE_DAYS,
    });
  }, []);

  const logout = useCallback(() => {
    Cookies.remove(COOKIE_NAME);
  }, []);

  return {
    session,
    hasSession,
    login,
    logout,
  };
};

export { useSession, COOKIE_NAME, type Session };
