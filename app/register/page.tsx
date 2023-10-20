import React from 'react';

import { Register } from '../../src/components/pages/Register/Register';
import { config } from '../../config/config';

export default async function Page() {
  return <Register config={config} />;
}
