import type { Binding } from '../types';

const logBinding = (binding: Binding) => {
  console.log('%j\n', binding);
};

export { logBinding };
