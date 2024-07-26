
// Make a request to the Numbers API to get a fact about your favorite number using async/await
async function getFact() {
  try {
    const response = await fetch('http://numbersapi.com/42?json');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getFact();

// Get data on multiple numbers in a single request using async/await
async function getMultipleFacts() {
  try {
    const response = await fetch('http://numbersapi.com/1..3,42?json');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getMultipleFacts();

// Use the API to get 4 facts on your favorite number using async/await
const favoriteNumber = 42;

async function getFourFacts() {
  const factsPromises = [];
  for (let i = 0; i < 4; i++) {
    factsPromises.push(fetch(`http://numbersapi.com/${favoriteNumber}?json`).then(response => response.json()));
  }

  try {
    const facts = await Promise.all(factsPromises);
    facts.forEach(fact => console.log(fact));
  } catch (error) {
    console.error('Error:', error);
  }
}

getFourFacts();
