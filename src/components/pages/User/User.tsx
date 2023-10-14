'use client';

import React from 'react';

import { UserStyled } from './User.styles';
import { useSession } from '../../../hooks/use-session';

const User: React.FC = () => {
  const { session } = useSession();

  return (
    <UserStyled>
      <p>Hi from user {session?.accessToken}</p>
    </UserStyled>
  );
};

export { User };
