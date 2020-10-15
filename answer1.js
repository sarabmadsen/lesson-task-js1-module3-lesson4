const CORS_URL = "https://noroffcors.herokuapp.com/";
const API_URL = "https://elephant-api.herokuapp.com/elephants";

const URL = CORS_URL + API_URL;

async function getElephants() {
  const response = await fetch(URL);
  const results = await response.json();
  console.log(results);
}

getElephants();