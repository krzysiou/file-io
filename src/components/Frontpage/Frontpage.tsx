import React from 'react';

import styles from './Frontpage.module.scss';

const { frontpage, header } = styles;

const Frontpage: React.FC = () => {
  return (
    <div className={frontpage}>
      <h1 className={header}>file-io</h1>
      <h3>Using default layout</h3>
    </div>
  );
};

export { Frontpage };
