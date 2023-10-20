'use client';

import React from 'react';

import type { UserData } from '../../../fetching/types';

import { ProfileStyled } from './Profile.styles';

type ProfileProps = {
  userData: UserData;
};

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  const { id, files } = userData;

  const filesComponent = files.map((file) => (
    <p key={file.id}>
      {file.id}, {file.title}
    </p>
  ));

  return (
    <ProfileStyled>
      <p>this is user id: {id}</p>
      {filesComponent}
    </ProfileStyled>
  );
};

export { Profile };
