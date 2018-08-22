import { CardSets } from './card-set';

export class PokerOptions {
  pokerName: string;
  cardSet: string;
  cards: string[];

  constructor() {
    this.cardSet = CardSets.default;
  }
}
