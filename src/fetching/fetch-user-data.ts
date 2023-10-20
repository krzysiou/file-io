import { cookies } from 'next/headers';

import type { Session, UserData } from './types';

import { config } from '../../config/config';

const { apiUrl, sessionCookieName } = config;

const getUserData = async (): Promise<UserData> => {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get(sessionCookieName).value;

  const session: Session = JSON.parse(sessionCookie);

  const data = await fetch(`${apiUrl}/admin/data`, {
    next: { revalidate: 0 },
    headers: { Authorization: `Bearer ${session.accessToken}` },
  });

  return data.json();
};

export { getUserData };
