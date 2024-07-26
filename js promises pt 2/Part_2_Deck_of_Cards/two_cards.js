
// Make a request to the deck of cards API to request a single card from a newly shuffled deck, and then request one more card from the same deck
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
  .then(response => response.json())
  .then(deck => {
    const deckId = deck.deck_id;
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => response.json())
      .then(card1 => {
        console.log(card1.cards[0]);
        return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then(response => response.json())
          .then(card2 => console.log(card2.cards[0]));
      });
  })
  .catch(error => console.error('Error:', error));
