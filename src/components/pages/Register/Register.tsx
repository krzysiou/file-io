'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { LoginStyled } from './Register.styles';

type ErrorObject = {
  message: string;
};

type RegisterErrors = {
  username: ErrorObject;
  password: ErrorObject;
};
const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<RegisterErrors>();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback(() => {
    const customErrors = {
      username: { message: 'Wrong email' },
      password: { message: 'Wrong password' },
    };

    // send request with username and password
    console.log(username, password);
    setErrors(customErrors);
    setUsername('');
    setPassword('');
  }, [password, username]);

  useEffect(() => {
    const handleKeyboardInput = (event: KeyboardEvent) => {
      if (
        ref.current &&
        ref.current.contains(event.target as Node) &&
        event.code === 'Enter'
      ) {
        handleSubmit();
      }
    };

    document.addEventListener('keydown', handleKeyboardInput);

    return () => {
      document.removeEventListener('keydown', handleKeyboardInput);
    };
  }, [handleSubmit]);

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const clearUsername = () => setUsername('');
  const clearPassword = () => setPassword('');

  const usernameClear = username ? (
    <p className="clear" onClick={clearUsername}>
      &#10005;
    </p>
  ) : null;

  const passwordClear = password ? (
    <p className="clear" onClick={clearPassword}>
      &#10005;
    </p>
  ) : null;

  const usernameError = errors?.username ? (
    <span className="error">{errors.username.message}</span>
  ) : null;

  const passwordError = errors?.password ? (
    <span className="error">{errors.password.message}</span>
  ) : null;

  return (
    <LoginStyled errors={errors}>
      <p className="hero">
        <span>Sign up</span>
      </p>

      <form ref={ref}>
        <p className="label">Username</p>
        <div className="input-frame input-username">
          <input
            type="text"
            className="form-input"
            onChange={handleUsernameChange}
            value={username}
          />
          {usernameClear}
          {usernameError}
        </div>

        <p className="label">Password</p>
        <div className="input-frame input-password">
          <input
            type="password"
            className="form-input"
            onChange={handlePasswordChange}
            value={password}
          />
          {passwordClear}
          {passwordError}
        </div>
      </form>

      <button type="button" onClick={handleSubmit} className="submit-button">
        Sign up
      </button>

      <Link href="/login" className="redirect">
        Already have an account? <span>Sign in</span>
      </Link>
    </LoginStyled>
  );
};

export { Register, type RegisterErrors };
