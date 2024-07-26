
let deckId;

// Create a new deck when the page loads using async/await
async function createDeck() {
  try {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
    const deck = await response.json();
    deckId = deck.deck_id;
  } catch (error) {
    console.error('Error:', error);
  }
}

createDeck();

document.getElementById('draw-card').addEventListener('click', async () => {
  // Draw a card from the deck using async/await
  try {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const data = await response.json();
    const card = data.cards[0];
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = `<p>${card.value} of ${card.suit}</p><img src="${card.image}" alt="${card.value} of ${card.suit}">`;
  } catch (error) {
    console.error('Error:', error);
  }
});
