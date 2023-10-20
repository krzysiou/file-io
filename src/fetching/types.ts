type Session = {
  id: string;
  accessToken: string;
  expire: number;
};

type FileType = 'spz';

type UserFile = {
  id: string;
  type: FileType;
  name: string;
  date: number;
};

type UserData = {
  id: string;
  username?: string;
  files?: UserFile[];
};

export { type UserData, type Session };
