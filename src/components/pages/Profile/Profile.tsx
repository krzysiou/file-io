'use client';

import React from 'react';

import type { UserData } from '../../../fetching/types';

import { ProfileStyled } from './Profile.styles';

type ProfileProps = {
  userData: UserData;
};

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  const { id } = userData;

  return (
    <ProfileStyled>
      <p>this is username: {id}</p>
    </ProfileStyled>
  );
};

export { Profile };
