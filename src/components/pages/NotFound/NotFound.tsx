'use client';

import React from 'react';
import Link from 'next/link';

import { NotFoundStyled } from './NotFound.styles';

const NotFound: React.FC = () => {
  return (
    <NotFoundStyled>
      <p className="hero">
        <span>404</span>
      </p>
      <p className="description">
        Oops . . . we couldn&apos;t find what you were looking for.
      </p>
      <Link href="/" className="link">
        Home
      </Link>
    </NotFoundStyled>
  );
};

export { NotFound };
