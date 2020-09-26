const qouteContainer = document.getElementById("qoute-container");
const qouteText = document.getElementById("qoute");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

async function getQuote() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();
      if (data.quoteAuthor === '') {
          authorText.innerText = 'Unknown';
      } else {
          authorText.innerText = data.quoteAuthor;
      }
      if (data.qouteText.length > 50) {
          qouteText.classList.add('long-quote');
      } else {
          qouteText.classList.remove('long-quote');
      }
    qouteText.innerText = data.qouteText;
  } catch (error) {
    getQuote();
  }
}

getQuote();
