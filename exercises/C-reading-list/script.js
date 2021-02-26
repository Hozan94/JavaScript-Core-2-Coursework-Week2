function readingList(books) {
  let contents = document.querySelector("#content");

  let pageHeader = document.createElement("h1");                            // Adding a header
  pageHeader.innerText = "Book list";
  contents.appendChild(pageHeader);

  let listOfBooks = document.createElement("ul");                           // creating an unordered list before the loop;

  for (let book of books) {
    let eachList = document.createElement("li");                            // For each iteration it creates a new list   
    eachList.style.listStyle = "none";                                   // Style each "li" list
    eachList.style.textAlign = "center";

    if (book.alreadyRead === true) {                                        // A condition which changes the background color of each list "li"
      eachList.style.backgroundColor = "green";
    } else {
      eachList.style.backgroundColor = "red"
    }

    let bookP = document.createElement("p");                                // For each iteration it creates a new text (paragraph)
    bookP.innerText = `${book.title} - ${book.author}`;

    let bookImage = document.createElement("img");                          // For each iteration it creates a new image, and sets attributes and styles it
    bookImage.setAttribute("src", "./Img/" + `${book.title}` + ".jpg");
    bookImage.setAttribute("alt", "The cover image of " + `${book.title}`);
    bookImage.style.width = "200px";
    bookImage.style.height = "300px";

    eachList.appendChild(bookP);                                            // Append each new "p" and "img" to the its own "li", 
    eachList.appendChild(bookImage);                                        //and then append each "li" to the "ul" outside the loop
    listOfBooks.appendChild(eachList);
  }

  contents.appendChild(listOfBooks);                                        // Finally append the "ul" to the <div> with id = #content.
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