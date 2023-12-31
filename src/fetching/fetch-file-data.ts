import { cookies } from 'next/headers';
import axios from 'axios';
import { notFound } from 'next/navigation';

import type { File, Session } from '../types';

import { config } from '../config/config';

const { apiUrl, sessionCookieName } = config;

const getFileData = async (id: string): Promise<File> => {
  try {
    const cookieStore = cookies();
    const session: Session = JSON.parse(
      cookieStore.get(sessionCookieName).value
    );

    const { data } = await axios.post<File>(
      `${apiUrl}/admin/file`,
      { id },
      {
        headers: { Authorization: `Bearer ${session.accessToken}` },
      }
    );

    return data;
  } catch (error) {
    notFound();
  }
};

export { getFileData };
