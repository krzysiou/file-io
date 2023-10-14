'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { LogoIcon, MenuIcon } from '../Icons';
import { HeaderStyled } from './Header.styles';
import { Dropdown } from './Dropdown';
import { useSession } from '../../../hooks/use-session';

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { hasSession } = useSession();

  const handleOpen = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

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
    <Link href="/user" className="headerLink" onClick={closeMenu}>
      Profile
    </Link>
  ) : (
    <Link href="/login" className="headerLink" onClick={closeMenu}>
      Sign in
    </Link>
  );

  return (
    <HeaderStyled open={open}>
      <LogoIcon />
      <Dropdown
        open={open}
        trigger={dropdownTrigger}
        menu={[homeLink, schemasLink, loginOrProfileLink]}
      />
      <div className="headerLinks">
        {homeLink}
        {schemasLink}
        {loginOrProfileLink}
      </div>
    </HeaderStyled>
  );
};

export { Header };
