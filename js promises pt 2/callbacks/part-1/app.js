
// Make a request to the Numbers API to get a fact about your favorite number using callbacks
function getFact(callback) {
  fetch('http://numbersapi.com/42?json')
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

getFact((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(data);
  }
});

// Get data on multiple numbers in a single request using callbacks
function getMultipleFacts(callback) {
  fetch('http://numbersapi.com/1..3,42?json')
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

getMultipleFacts((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(data);
  }
});

// Use the API to get 4 facts on your favorite number using callbacks
const favoriteNumber = 42;
const facts = [];

function getFourFacts(callback) {
  for (let i = 0; i < 4; i++) {
    fetch(`http://numbersapi.com/${favoriteNumber}?json`)
      .then(response => response.json())
      .then(data => {
        facts.push(data);
        if (facts.length === 4) {
          callback(null, facts);
        }
      })
      .catch(error => callback(error, null));
  }
}

getFourFacts((error, facts) => {
  if (error) {
    console.error('Error:', error);
  } else {
    facts.forEach(fact => console.log(fact));
  }
});
