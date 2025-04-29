const words = [
  { word: "Apple", meaning: "A fruit" },
  { word: "Book", meaning: "A set of written pages" },
  { word: "Car", meaning: "A vehicle" },
];
let currentIndex = 0;
let isFlipped = false;
const flashcard = document.getElementById('flashcard');
function updateCard() {
  flashcard.textContent = isFlipped ? words[currentIndex].meaning : words[currentIndex].word;
}
function flipCard() {
  isFlipped = !isFlipped;
  updateCard();
}
function prevCard() {
  currentIndex = (currentIndex - 1 + words.length) % words.length;
  isFlipped = false;
  updateCard();
}
function nextCard() {
  currentIndex = (currentIndex + 1) % words.length;
  isFlipped = false;
  updateCard();
}
updateCard();
