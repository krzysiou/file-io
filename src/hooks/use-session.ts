'use client';

import { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';

import type { Session } from '../types';

import { config } from '../config/config';

const { apiUrl, sessionCookieName } = config;

const useSession = () => {
  const [session, setSession] = useState<Session>(null);
  const [hasSession, setHasSession] = useState<boolean>(false);
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
  }, [pathname]);

  const register = useCallback(
    async (username: string, password: string) => {
      const { data } = await axios.post<Session>(`${apiUrl}/admin/register`, {
        username,
        password,
      });

      await Cookies.set(sessionCookieName, JSON.stringify(data), {
        expires: data.expire,
      });

      router.push('/profile');
    },
    [router]
  );

  const login = useCallback(
    async (username: string, password: string) => {
      const { data } = await axios.post<Session>(`${apiUrl}/admin/login`, {
        username,
        password,
      });

      await Cookies.set(sessionCookieName, JSON.stringify(data), {
        expires: data.expire / 24 / 60 / 60 / 1000,
      });

      router.push('/profile');
    },
    [router]
  );

  const logout = useCallback(async () => {
    await Cookies.remove(sessionCookieName);
    router.push('/login');
  }, [router]);

  return {
    session,
    hasSession,
    register,
    login,
    logout,
  };
};

export { useSession, type Session };
