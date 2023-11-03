import React from 'react';

import { Profile } from '../../src/components/pages/Profile/Profile';
import { getUserFiles } from '../../src/fetching/fetch-user-files-data';

export default async function Page() {
  const files = await getUserFiles();

  return <Profile files={files} />;
}
