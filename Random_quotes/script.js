const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

// Function to fetch and display a random quote
function getRandomQuote() {
  const apiKey = "D0Dh6UXqaZYYeDFZUBdhHcotSJqDwNLu4q7K8PqU";
  const options = {
    headers: { "x-api-key": apiKey },
  };

  fetch("https://api.api-ninjas.com/v1/quotes", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      quote.innerHTML = `“${data[0].quote}”`;
      author.innerHTML = `~${data[0].author}`;
    })
    .catch((err) => console.log(err));
}

// Fetch and display a random quote when the page loads
document.addEventListener("DOMContentLoaded", getRandomQuote);

// Add an event listener to the "New Quote" button to fetch and display a new quote
const newQuoteButton = document.querySelector(".btn-container");
newQuoteButton.addEventListener("click", getRandomQuote);
