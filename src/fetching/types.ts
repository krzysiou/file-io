type Session = {
  id: string;
  accessToken: string;
  expire: number;
};

type UserFile = {
  id: string;
  title: string;
};

type UserData = Session & {
  files: UserFile[];
};

export { type UserData, type Session };
