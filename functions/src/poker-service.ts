
export class PokerService {

  getCards(cardSet: string): string[] {
    switch (cardSet.toLowerCase()) {

      case 'hours':
        return ['0', '1', '2', '4', '8', '16'];

      case 'points':
      default:
        return ['1', '2', '3', '5', '8', '13'];
    }
  }

}

module.exports = new PokerService();
