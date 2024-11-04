// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

function getCardValue(card) {
  if (card.length < 2 && card.length > 3) {
    return "Enter proper input";
  } else if (card.length === 2) {
    let rank = card[0];
    if (!isNaN(+rank) && +rank >= 2 && +rank <= 9) {
      return 5;
    } else if (rank === "J" || rank === "Q" || rank === "K") {
      return 10;
    } else if (rank === "A") {
      return 11;
    } else {
      return "Invalid card rank.";
    }
  } else {
    return 10;
  }
}

// You need to write assertions for your function to check it works in different cases
console.assert(getCardValue("A♠") === 11, "1");
console.assert(getCardValue("K♠") === 10, "2");
console.assert(getCardValue("7♠") === 5, "3");
console.log(getCardValue("10♠") === 10, "4");
// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
