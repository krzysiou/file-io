import React from 'react';

import { Profile } from '../../src/components/pages/Profile/Profile';
import { getUserData } from '../../src/fetching/fetch-user-data';

export default async function Page() {
  const user = await getUserData();

  return <Profile user={user} />;
}
