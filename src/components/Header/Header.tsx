import React from 'react';
import Link from 'next/link';

import { Logo, MenuIcon } from '../Icons';
import styles from './Header.module.scss';

const { header, headerLinks, headerLink } = styles;

const Header: React.FC = () => {
  return (
    <div className={header}>
      <Logo />
      <MenuIcon />
      <div className={headerLinks}>
        <Link href="/" className={headerLink}>
          Home
        </Link>
        <Link href="/schemas" className={headerLink}>
          Schemas
        </Link>
        <Link href="/login" className={headerLink}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export { Header };
