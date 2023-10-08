import React from 'react';

import styles from './Login.module.scss';

const { login } = styles;

const Login: React.FC = () => {
  return <div className={login}>Hello form login</div>;
};

export { Login };
