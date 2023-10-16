'use client';

import React from 'react';

import type { Session } from '../../../hooks/use-session';

import { ProfileStyled } from './Profile.styles';
import { useSession } from '../../../hooks/use-session';

const mockUserData = {
  files: [
    { id: 'file-id-123', type: 'spz', name: 'Mock Spz', date: Date.now() },
  ],
};

const getMockUser = (session: Session) => ({
  ...session,
  files: mockUserData.files,
});

const Profile: React.FC = () => {
  const { session } = useSession();
  const mockSession = getMockUser(session);

  return (
    <ProfileStyled>
      <p>username : {mockSession?.username}</p>
      <p>Hi from user {mockSession?.accessToken}</p>
      {mockSession.files[0].id}
    </ProfileStyled>
  );
};

export { Profile };
