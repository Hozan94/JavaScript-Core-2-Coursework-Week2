function readingList(books) {
  let contents = document.querySelector("#content");

  let pageHeader = document.createElement("h1");                            // Adding a header
  pageHeader.innerText = "Book list";
  contents.appendChild(pageHeader);

  let listOfBooks = document.createElement("ul");                           // creating an unordered list before the loop;

  for (let book of books) {
    let eachItem = document.createElement("li");                            // For each iteration it creates a new list   
    eachItem.classList.add("my-list");                                      // Style each "li" list


    if (book.alreadyRead === true) {                                        // A condition which changes the background color of each list "li"
      eachItem.classList.add("book-is-read");
    } else {
      eachItem.classList.add("book-not-read");
    }

    let bookInfo = document.createElement("p");                                // For each iteration it creates a new text (paragraph)
    bookInfo.innerText = `${book.title} - ${book.author}`;

    let bookImage = document.createElement("img");                            // For each iteration it creates a new image, and sets attributes and styles it
    bookImage.setAttribute("src", "./Img/" + `${book.title}` + ".jpg");
    bookImage.setAttribute("alt", "The cover image of " + `${book.title}`);
    bookImage.classList.add("book-image");
    bookImage.classList.add("book-image");

    eachItem.append(bookInfo, bookImage);                                            // Append each new "p" and "img" to the its own "li",       
    listOfBooks.appendChild(eachItem);                                               //and then append each "li" to the "ul" outside the loop
  }

  contents.appendChild(listOfBooks);                                          // Finally append the "ul" to the <div> with id = #content.
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);