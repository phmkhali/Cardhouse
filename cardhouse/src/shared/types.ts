export enum SelectedPage {
  HOME = "home",
  DASHBOARD = "dashboard",
  LOGIN = "LOGIN",
}
export interface UserType {
  email: string;
  username: string;
  authToken?: string;
}