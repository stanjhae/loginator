export type User = { email: string; password: string };

export type AuthStateType = {
  token: string;
  isLoggedIn: boolean;
};
