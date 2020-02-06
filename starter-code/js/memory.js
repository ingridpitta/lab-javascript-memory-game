class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cards) {
    if (!cards) {
      return undefined;
    }

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let elements = [cards[j]];
      return elements;
    }
  }
  checkIfPair(card1, card2) {
    if (card1) {
      this.pairsClicked++;
    }
    if (card1 == card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
