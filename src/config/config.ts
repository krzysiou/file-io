import type { Config } from './types';

const { API_URL } = process.env;

const config: Config = {
  apiUrl: API_URL || 'http://localhost:3100',
};

export { config };
