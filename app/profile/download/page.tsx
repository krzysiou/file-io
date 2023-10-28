import React from 'react';

import { Download } from '../../../src/components/pages/Download/Download';
import { getFileData } from '../../../src/fetching/fetch-file-data';

export default async function Page({ searchParams }) {
  const { id } = searchParams;

  const file = await getFileData(id);

  return <Download file={file} />;
}
