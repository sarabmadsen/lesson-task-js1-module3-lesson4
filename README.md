# JavaScript 1 - Module 3

## Lesson Task 4 Answers

### Question 1

Using the `CORS_URL` variable below, convert the API call inside the `getElephants` function to use the cors-anywhere link, such that the API call will succeed.

```js
const CORS_URL = "https://noroffcors.herokuapp.com/";
```

```js
const API_URL = "https://elephant-api.herokuapp.com/elephants";

async function getElephants() {
  const response = await fetch(API_URL);
  const results = await response.json();
  console.log(results);
}
```

### Question 2

Add headers to the below API call.

You can choose whether to create a variable for the headers object seperately from the call and pass the variable in as the second parameter, or pass the headers object in directly.

```js
const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

async function callUrbanDictionary() {
  const response = await fetch(API_URL);
  const results = await response.json();
  console.log(results);
}
```
