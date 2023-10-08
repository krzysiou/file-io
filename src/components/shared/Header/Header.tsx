'use client';

import React from 'react';
import Link from 'next/link';

import { LogoIcon, MenuIcon } from '../Icons';
import { HeaderStyled } from './Header.styles';
import { Dropdown } from './Dropdown';

const Header: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

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

  const loginLink = (
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
        menu={[homeLink, schemasLink, loginLink]}
      />
      <div className="headerLinks">
        {homeLink}
        {schemasLink}
        {loginLink}
      </div>
    </HeaderStyled>
  );
};

export { Header };
