class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;
  }
  shuffleCards(cards) {
    if (!cards) {
      return undefined;
    }

   

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let elements = [cards[j]];
      return elements
    }
  }
  checkIfPair(card1, card2) {}
  isFinished() {}
}

const cards1 = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];
let teste = new MemoryGame();

let card1 = teste.shuffleCards(cards1);

console.log(card1);
