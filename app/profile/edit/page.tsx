import React from 'react';

import { Edit } from '../../../src/components/pages/Edit/Edit';
import { getFileData } from '../../../src/fetching/fetch-file-data';

export default async function Page({ searchParams }) {
  const { id } = searchParams;

  const file = await getFileData(id);

  return <Edit file={file} />;
}
