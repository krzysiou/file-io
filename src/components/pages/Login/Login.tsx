'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { LoginStyled } from './Login.styles';

type ErrorObject = {
  message: string;
};

type LoginErrors = {
  username: ErrorObject;
  password: ErrorObject;
};
const Login: React.FC = () => {
  const [errors, setErrors] = useState<LoginErrors>();

  const usernameError = errors?.username ? (
    <span className="description">{errors.username.message}</span>
  ) : null;

  const passwordError = errors?.password ? (
    <span className="description">{errors.password.message}</span>
  ) : null;

  const handleSubmit = () => {
    const customErrors = {
      username: { message: 'Wrong email' },
      password: { message: 'Wrong password' },
    };

    setErrors(customErrors);
  };

  return (
    <LoginStyled>
      <p className="hero">
        <span>Login to the system</span>
      </p>

      <input type="text" placeholder="Username" className="formInput" />
      {usernameError}

      <input type="password" placeholder="Password" className="formInput" />
      {passwordError}

      <button type="button" onClick={handleSubmit} className="submitButton">
        Sign in
      </button>

      <Link href="/register">Don&apos;t have an account? Sign up</Link>
    </LoginStyled>
  );
};

export { Login };
