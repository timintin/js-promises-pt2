
// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck
fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
  .then(response => response.json())
  .then(data => console.log(data.cards[0]))
  .catch(error => console.error('Error:', error));
