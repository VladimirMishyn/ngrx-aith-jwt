export interface User {
  id: string;
  email: string;
  password: string;
  active: boolean;
  roles: Array<string>;
  subscription: string;
  language: string;
}
