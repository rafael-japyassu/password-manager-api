type AuthenticateUser = {
  id: string;
  name: string;
  email: string;
};

export type AuthenticateUserResponse = {
  user: AuthenticateUser;
  token: string;
};
