import type { Config } from './types';

const config: Config = {
  apiUrl: process.env.API_URL || 'http://localhost:3100',
  sessionCookieName: process.env.SESSION_COOKIE_NAME || 'session',
};

export { config };
