'use client';

import { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';
import axios from 'axios';

import { config } from '../config/config';

const { apiUrl } = config;

const COOKIE_NAME = 'session';
const EXPIRE_DAYS = 7;

type FileType = 'spz';

type File = {
  id: string;
  type: FileType;
  name: string;
  date: number;
};

type Session = {
  username: string;
  files: File[];
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

  const register = useCallback(async (username: string, password: string) => {
    const { data } = await axios.post<Session>(`${apiUrl}/admin/register`, {
      username,
      password,
    });

    Cookies.set(COOKIE_NAME, JSON.stringify(data), {
      expires: EXPIRE_DAYS,
    });
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const { data } = await axios.post<Session>(`${apiUrl}/admin/login`, {
      username,
      password,
    });

    Cookies.set(COOKIE_NAME, JSON.stringify(data), {
      expires: EXPIRE_DAYS,
    });
  }, []);

  const logout = useCallback(() => {
    Cookies.remove(COOKIE_NAME);
  }, []);

  return {
    session,
    hasSession,
    register,
    login,
    logout,
  };
};

export { useSession, COOKIE_NAME, type Session };
