import type { Express } from 'express';
import type { Binding } from '../types';

import { logBinding } from './log-binding';

const initRouter = (
  app: Express,
  port: string | undefined,
  bindings: Binding[]
) => {
  if (!port) {
    console.log('Please provide viable port');

    return;
  }

  bindings.forEach(({ method, path, callback, middleware }) => {
    if (method !== 'GET' && path.includes(':')) {
      console.log(
        'Cannot use request parameters with requests other that GET in'
      );
      logBinding({ method, path, callback, middleware });

      return;
    }

    if (method == 'GET') {
      middleware
        ? app.get(path, middleware, callback)
        : app.get(path, callback);

      return;
    }

    if (method == 'POST') {
      middleware
        ? app.post(path, middleware, callback)
        : app.post(path, callback);

      return;
    }
  });

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

export { initRouter };
