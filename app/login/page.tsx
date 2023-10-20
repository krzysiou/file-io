import React from 'react';

import { Login } from '../../src/components/pages/Login/Login';
import { config } from '../../config/config';

export default async function Page() {
  return <Login config={config} />;
}
