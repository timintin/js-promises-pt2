
// Use the API to get 4 facts on your favorite number
const favoriteNumber = 42;
const factsPromises = [];

for (let i = 0; i < 4; i++) {
  factsPromises.push(fetch(`http://numbersapi.com/${favoriteNumber}?json`).then(response => response.json()));
}

Promise.all(factsPromises)
  .then(facts => {
    facts.forEach(fact => console.log(fact));
  })
  .catch(error => console.error('Error:', error));
