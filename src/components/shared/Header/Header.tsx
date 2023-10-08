'use client';

import React from 'react';
import Link from 'next/link';

import { LogoIcon, MenuIcon } from '../Icons';
import { HeaderStyled } from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <LogoIcon />
      <MenuIcon />
      <div className="headerLinks">
        <Link href="/" className="headerLink">
          Home
        </Link>
        <Link href="/schemas" className="headerLink">
          Schemas
        </Link>
        <Link href="/login" className="headerLink">
          Sign in
        </Link>
      </div>
    </HeaderStyled>
  );
};

export { Header };
