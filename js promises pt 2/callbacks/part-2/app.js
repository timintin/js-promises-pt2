
let deckId;

// Create a new deck when the page loads using callbacks
function createDeck(callback) {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(response => response.json())
    .then(deck => {
      deckId = deck.deck_id;
      callback(null, deckId);
    })
    .catch(error => callback(error, null));
}

createDeck((error, deckId) => {
  if (error) {
    console.error('Error:', error);
  }
});

document.getElementById('draw-card').addEventListener('click', () => {
  // Draw a card from the deck using callbacks
  function drawCard(callback) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error, null));
  }

  drawCard((error, data) => {
    if (error) {
      console.error('Error:', error);
    } else {
      const card = data.cards[0];
      const cardContainer = document.getElementById('card-container');
      cardContainer.innerHTML = `<p>${card.value} of ${card.suit}</p><img src="${card.image}" alt="${card.value} of ${card.suit}">`;
    }
  });
});
