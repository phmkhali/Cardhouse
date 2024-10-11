export enum SelectedPage {
  HOME = "home",
  DASHBOARD = "dashboard",
  DECKS = "decks",
  LOGIN = "LOGIN",
}
export interface UserType {
  email: string;
  username: string;
  authToken?: string;
}