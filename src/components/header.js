const Header = (title, date, temp) => {
  //creating elements
  const headerContainerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleTag = document.createElement('h1');
  const tempSpan = document.createElement('span');

  //parent child relations
  headerContainerDiv.appendChild(dateSpan);
  headerContainerDiv.appendChild(titleTag);
  headerContainerDiv.appendChild(tempSpan);
  
  //assigning classes
  headerContainerDiv.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  //assigning element content
  dateSpan.textContent = `${ date }`;
  titleTag.textContent = `${ title }`;
  tempSpan.textContent = `${ temp }`;

  //returning the header
  return headerContainerDiv;


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  //header function
  const todaysHeader = Header('Today', 'Aug 6', 73);
  const cssSelector = document.querySelector(selector);
  cssSelector.appendChild(todaysHeader);
  return cssSelector;

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
