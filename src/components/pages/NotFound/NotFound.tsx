import React from 'react';
import Link from 'next/link';

import style from './NotFound.module.scss';

const { notFound, hero, description, link } = style;

const NotFound: React.FC = () => {
  return (
    <div className={notFound}>
      <p className={hero}>
        <span>404</span>
      </p>
      <p className={description}>
        Oops . . . we couldn&apos;t find what you were looking for.
      </p>
      <Link href="/" className={link}>
        Home
      </Link>
    </div>
  );
};

export { NotFound };
