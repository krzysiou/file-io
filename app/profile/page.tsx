import React from 'react';

import type { FileType } from '../../src/fetching/types';

import { Profile } from '../../src/components/pages/Profile/Profile';
import { getUserData } from '../../src/fetching/fetch-user-data';

const getMockData = () => {
  const dateOfCreation = Date.now() - 7 * 1000 * 24 * 60 * 60;
  const dateOfUpdate = Date.now() - 2 * 1000 * 24 * 60 * 60;

  const files = [
    {
      id: 'file-mock-id',
      title: 'Mock file title',
      type: 'spz' as FileType,
      dateOfCreation: dateOfCreation,
      dateOfUpdate: dateOfUpdate,
      form: {
        firstName: 'Krzysztof',
        surname: 'Tluszcz',
      },
    },
    {
      id: 'file-mock-id',
      title: 'Mock file titleM',
      type: 'spz' as FileType,
      dateOfCreation: dateOfCreation,
      form: {
        firstName: 'Krzysztof',
        surname: 'Tluszcz',
      },
    },
  ];

  const mockData = {
    files: files,
  };

  return mockData;
};

export default async function Page() {
  const userData = await getUserData();
  const mockData = getMockData();

  const user = { ...userData, files: mockData.files };

  return <Profile user={user} />;
}
