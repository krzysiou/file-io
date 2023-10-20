type ErrorObject = {
  message: string;
};

type AuthErrorObject = {
  username: ErrorObject;
  password: ErrorObject;
};

export { type AuthErrorObject, type ErrorObject };
