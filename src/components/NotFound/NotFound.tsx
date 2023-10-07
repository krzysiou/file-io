import React from 'react';
import Link from 'next/link';

import style from './NotFound.module.scss';

const { notFound, header, paragraph, goBack } = style;

const NotFound: React.FC = () => {
  return (
    <div className={notFound}>
      <h2 className={header}>404 Not Found</h2>
      <p className={paragraph}>Could not find requested resource</p>
      <Link href="/" className={goBack}>
        View frontpage
      </Link>
    </div>
  );
};

export { NotFound };
