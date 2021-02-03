// Question 1

const CORS_URL = "https://noroffcors.herokuapp.com/";

const API_URL = "https://elephant-api.herokuapp.com/elephants";

const newUrl = CORS_URL + API_URL;


async function getElephants() {
  const response = await fetch(newUrl);
  const results = await response.json();
  console.log(results);
}

getElephants();


// Question 2

const API_URL2 = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

const options = {"headers": {
    "x-rapidapi-key": "73d1ea9e2fmsh64a94f8f965d7d0p1e1ce0jsn94efa2482a95",
}};

async function callUrbanDictionary() {
  const response = await fetch(API_URL2, options);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();