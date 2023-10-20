import React from 'react';

import { Profile } from '../../src/components/pages/Profile/Profile';
import { getUserData } from '../../src/fetching/fetch-user-data';

export default async function Page() {
  const userData = await getUserData();

  return <Profile userData={userData} />;
}
