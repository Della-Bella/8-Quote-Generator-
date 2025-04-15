# Random Quote Generator

A simple web application that displays random quotes fetched from an API. This project was built to practice fundamental JavaScript concepts.

## Live Demo

https://quotegenerator-dellabella.netlify.app/

## Features

*   Displays a random quote and its author on page load.
*   Fetches a new random quote from the [Quotable API](https://github.com/lukePeavey/quotable) when the "New Quote" button is clicked.
*   Allows users to tweet the currently displayed quote using the Twitter Web Intent API.

## Technologies Used

*   **HTML:** For the basic structure of the page.
*   **CSS:** For styling the elements (layout, fonts, colors).
*   **JavaScript:**
    *   Fetching data from an external API using `fetch` and `async/await`.
    *   Manipulating the Document Object Model (DOM) to update the quote and author text.
    *   Handling user events (button clicks).
    *   Opening a new window for the Twitter intent.
*   **Quotable API:** As the source for the random quotes.
*   **Netlify:** For deploying the live version.

## Key JavaScript Concepts Practiced

*   **DOM Manipulation:** Selecting elements (`getElementById`) and changing their content (`innerHTML`).
*   **Asynchronous JavaScript:** Using `async` functions and the `await` keyword to handle API requests with `fetch`.
*   **API Interaction:** Making GET requests to a public API and parsing the JSON response.
*   **Event Handling:** Running functions when buttons are clicked (`onclick` attribute in HTML calling functions like `getQuote` and `tweet`).
*   **Browser APIs:** Using `window.open` to interact with other web services (Twitter).

## How it Works

1.  When the page loads, the `getQuote()` function is called initially.
2.  `getQuote()` uses `fetch` to request a random quote from the `api_url`.
3.  Using `async/await`, the code waits for the response and then parses the JSON data.
4.  The `.content` and `.author` from the received data are used to update the `innerHTML` of the corresponding HTML elements (`#quote` and `#author`).
5.  Clicking the "New Quote" button calls `getQuote()` again to fetch and display a new quote.
6.  Clicking the "Tweet" button calls the `tweet()` function, which opens a Twitter window pre-filled with the current quote text and author.

#leanringcode ;)
