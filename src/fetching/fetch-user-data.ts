import type { Session } from '../hooks/use-session';
import type { UserData } from './types';

const getUserData = async (session: Session): Promise<UserData> => {
  return { id: session.id };
};

export { getUserData };
