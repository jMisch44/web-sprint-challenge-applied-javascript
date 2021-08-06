import axios from "axios";

const Card = (article) => {
  //creating Elements
  const cardContainerDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const authorImgContainer = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorNameSpan = document.createElement('span');

  //hierarchy 
  cardContainerDiv.appendChild(headlineDiv);
  cardContainerDiv.appendChild(authorDiv);
  authorDiv.appendChild(authorImgContainer);
  authorImgContainer.appendChild(authorImg);
  authorDiv.appendChild(authorNameSpan);

  //assigning class names
  cardContainerDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  authorImgContainer.classList.add('img-container');

  //assigning Element content
  headlineDiv.textContent = `${ article['headline'] }`;
  authorImg.src = `${ article['authorPhoto'] }`;
  authorNameSpan.textContent = `${ article['authorName'] }`;

  //adding event listener
  cardContainerDiv.addEventListener('click', event => {
    console.log(`${ article['headline'] }`);
  })

  //returning author card
  return cardContainerDiv;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  const entryPoint = document.querySelector(selector);
  axios.get(`http://localhost:5000/api/articles`)
  .then(res => {
    console.log(res);
    // entryPoint.appendChild(articleMaker);
  }).catch(err => {
    console.error(err);
  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
