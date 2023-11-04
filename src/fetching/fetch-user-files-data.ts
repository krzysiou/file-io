import { cookies } from 'next/headers';
import axios from 'axios';

import type { File, Session } from '../types';

import { config } from '../config/config';

const { apiUrl, sessionCookieName } = config;

const getUserFiles = async (): Promise<File[]> => {
  const cookieStore = cookies();
  const session: Session = JSON.parse(cookieStore.get(sessionCookieName).value);

  const { data } = await axios.get<File[]>(`${apiUrl}/admin/data`, {
    headers: { Authorization: `Bearer ${session.accessToken}` },
  });

  return data;
};

export { getUserFiles };
