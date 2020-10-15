const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

const options = { "headers": {
    "x-rapidapi-key": "f1f6bf4f35msh6bce51834ab65fep1142d8jsne932f1fff042",
}};

async function callUrbanDictionary() {
  const response = await fetch(API_URL, options);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();