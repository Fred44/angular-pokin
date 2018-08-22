import { PokerOptions } from './poker-options';

export interface PokerGame {
  id?: string;
  options: PokerOptions;
  cards: string[];
  owner: string;
  players: string[];
  creationDate: Date;
}
