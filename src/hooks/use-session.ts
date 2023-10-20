'use client';

import { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';

import type { Config } from '../../config/types';
import type { Session } from '../fetching/types';

const useSession = (config: Config) => {
  const [session, setSession] = useState<Session>(null);
  const [hasSession, setHasSession] = useState<boolean>(false);

  const { apiUrl, sessionCookieName, sessionCookieExpireDays } = config;

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const sessionCookie = Cookies.get(sessionCookieName);

    if (sessionCookie) {
      setHasSession(true);
      setSession(JSON.parse(sessionCookie));

      return;
    }

    setHasSession(false);
    setSession(null);
  }, [pathname, sessionCookieName]);

  const register = useCallback(
    async (username: string, password: string) => {
      const { data } = await axios.post<Session>(`${apiUrl}/admin/register`, {
        username,
        password,
      });

      await Cookies.set(sessionCookieName, JSON.stringify(data), {
        expires: sessionCookieExpireDays,
      });

      router.push('/profile');
    },
    [apiUrl, router, sessionCookieExpireDays, sessionCookieName]
  );

  const login = useCallback(
    async (username: string, password: string) => {
      const { data } = await axios.post<Session>(`${apiUrl}/admin/login`, {
        username,
        password,
      });

      await Cookies.set(sessionCookieName, JSON.stringify(data), {
        expires: sessionCookieExpireDays,
      });

      router.push('/profile');
    },
    [apiUrl, router, sessionCookieExpireDays, sessionCookieName]
  );

  const logout = useCallback(async () => {
    await Cookies.remove(sessionCookieName);
    router.push('/login');
  }, [router, sessionCookieName]);

  return {
    session,
    hasSession,
    register,
    login,
    logout,
  };
};

export { useSession, type Session };
