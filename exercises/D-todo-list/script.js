function todoList(todos) {
  let contents = document.querySelector("#content");

  let pageHeader = document.createElement("h1");                                //Create Header and append it to the <div> with Id = #content
  pageHeader.innerText = "Our To Do List:";
  contents.appendChild(pageHeader);

  let toDoList = document.createElement("ul");                                  //Create the "ul" tag

  for (let action of todos) {                                                   //Iterate through the list
    let eachItem = document.createElement("li")                                 //In each iteration create a list "li", then write a text inside and style the text
    eachItem.innerText = action.todo;
    eachItem.classList.add("my-item")
    eachItem.addEventListener("click", addLineThrough)                          //Add an event listener and its callback function.
    
    toDoList.appendChild(eachItem);                                             //Append each new list "li" to our "ul" at the top
  }

  contents.appendChild(toDoList);                                              //Append the unordered list "ul" to the <div> with Id = #content
}

function addLineThrough(e) {
  if (e.target.style.textDecoration !== "line-through") {
    e.target.classList.toggle("add-line-through");
  } else {
    e.target.classList.toggle("my-item");
  }
}

const ourTodos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(ourTodos);