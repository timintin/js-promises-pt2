
// Get data on multiple numbers in a single request
fetch('http://numbersapi.com/1..3,42?json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
