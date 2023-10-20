import type { Config } from './types';

const { API_URL, SESSION_COOKIE_NAME, SESSION_COOKIE_EXPIRE_DAYS } =
  process.env;

const config: Config = {
  apiUrl: API_URL || 'http://localhost:3100',
  sessionCookieName: SESSION_COOKIE_NAME || 'session',
  sessionCookieExpireDays: Number(SESSION_COOKIE_EXPIRE_DAYS) || 7,
};

export { config };
