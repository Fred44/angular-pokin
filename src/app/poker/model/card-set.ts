export class CardSet {
  name: string;
  cards: string[];

  constructor(name: string, cards?: string[]) {
    this.name = name;
    this.cards = cards;
  }
}

export const CardSets = {
  default: 'Points',
  list: [
    new CardSet('Points', ['1', '2', '3', '5', '8', '13']),
    new CardSet('Hours', ['0', '1', '2', '4', '8', '16'])
  ]
};
