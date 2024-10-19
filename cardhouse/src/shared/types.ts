import { State } from "ts-fsrs";

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

export interface Deck {
  id: string;
  name: string;
  userId: string;
}

export interface Card {
  difficulty: number;
  due: Date;
  elapsed_days: number;
  lapses: number;
  last_review?: Date;
  reps: number;
  scheduled_days: number;
  stability: number;
  state: State;
}