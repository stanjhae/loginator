export type User = { email: string; password: string };

export type AppStoreType = {
  token: string;
  isLoggedIn: boolean;
  email?: string;
  isNavMenuOpen: boolean;
};
