'use client';

import React from 'react';

import { ProfileStyled } from './Profile.styles';
import { useSession } from '../../../hooks/use-session';

const mockUserData = {
  files: [
    { id: 'file-id-123', type: 'spz', name: 'Mock Spz', date: Date.now() },
  ],
};

const Profile: React.FC = () => {
  const { session } = useSession();

  return (
    <ProfileStyled>
      <p>username : {session?.username}</p>
      <p>Hi from user {session?.accessToken}</p>
      {mockUserData.files[0].id}
    </ProfileStyled>
  );
};

export { Profile };
