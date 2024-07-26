
let deckId;

// Create a new deck when the page loads
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
  .then(response => response.json())
  .then(deck => {
    deckId = deck.deck_id;
  })
  .catch(error => console.error('Error:', error));

document.getElementById('draw-card').addEventListener('click', () => {
  // Draw a card from the deck
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(data => {
      const card = data.cards[0];
      const cardContainer = document.getElementById('card-container');
      cardContainer.innerHTML = `<p>${card.value} of ${card.suit}</p><img src="${card.image}" alt="${card.value} of ${card.suit}">`;
    })
    .catch(error => console.error('Error:', error));
});
