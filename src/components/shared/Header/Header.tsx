'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import type { Config } from '../../../../config/types';

import { LogoIcon, MenuIcon } from '../Icons';
import { HeaderStyled } from './Header.styles';
import { Dropdown } from './Dropdown';
import { useSession } from '../../../hooks/use-session';

type HeaderProps = {
  config: Config;
};

const Header: React.FC<HeaderProps> = ({ config }) => {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();
  const { hasSession, logout } = useSession(config);

  const handleOpen = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const handleSignOutClick = () => {
    logout();
    router.push('/login');
  };

  const dropdownTrigger = (
    <button onClick={handleOpen}>
      <MenuIcon />
    </button>
  );

  const homeLink = (
    <Link href="/" className="headerLink" onClick={closeMenu}>
      Home
    </Link>
  );

  const schemasLink = (
    <Link href="/schemas" className="headerLink" onClick={closeMenu}>
      Schemas
    </Link>
  );

  const loginOrProfileLink = hasSession ? (
    <Link href="/profile" className="headerLink" onClick={closeMenu}>
      Profile
    </Link>
  ) : (
    <Link href="/login" className="headerLink" onClick={closeMenu}>
      Sign in
    </Link>
  );

  const logoutLink = hasSession && (
    <a className="headerLink" onClick={handleSignOutClick}>
      Sign out
    </a>
  );

  return (
    <HeaderStyled open={open}>
      <LogoIcon />
      <Dropdown
        open={open}
        trigger={dropdownTrigger}
        menu={[homeLink, schemasLink, loginOrProfileLink, logoutLink]}
      />
      <div className="headerLinks">
        {homeLink}
        {schemasLink}
        {loginOrProfileLink}
        {logoutLink}
      </div>
    </HeaderStyled>
  );
};

export { Header };
