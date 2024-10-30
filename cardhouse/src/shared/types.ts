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
  cards?: Card[];
}

export interface Card {
  id: string;           
  frontCard: string;    
  backCard: string;       
  deckId: string;         
  difficulty?: string;    
  due?: Date;             
  elapsed_days?: number;  
  lapses?: number;        
}
