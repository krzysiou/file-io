import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import type { Session } from '../../src/hooks/use-session';

import { Profile } from '../../src/components/pages/Profile/Profile';
import { getUserData } from '../../src/fetching/fetch-user-data';
import { config } from '../../config/config';

const { sessionCookieName } = config;

export default async function Page() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get(sessionCookieName)?.value;

  if (!sessionCookie) {
    redirect('/login');
  }

  const session = JSON.parse(sessionCookie) as Session;
  const userData = await getUserData(session);

  return <Profile userData={userData} />;
}
