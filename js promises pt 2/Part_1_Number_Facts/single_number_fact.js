
// Make a request to the Numbers API to get a fact about your favorite number
fetch('http://numbersapi.com/42?json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
