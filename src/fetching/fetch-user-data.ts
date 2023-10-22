import { cookies } from 'next/headers';
import axios from 'axios';

import type { Session, User } from './types';

import { config } from '../../config/config';

const { apiUrl, sessionCookieName } = config;

const getUserData = async (): Promise<User> => {
  const cookieStore = cookies();
  const session: Session = JSON.parse(cookieStore.get(sessionCookieName).value);

  const { data } = await axios.get<User>(`${apiUrl}/admin/data`, {
    headers: { Authorization: `Bearer ${session.accessToken}` },
  });

  return data;
};

export { getUserData };
