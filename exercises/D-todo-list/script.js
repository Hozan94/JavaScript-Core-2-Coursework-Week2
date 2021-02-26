function todoList(todos) {
  let contents = document.querySelector("#content");

  let pageHeader = document.createElement("h1");                                //Create Header and append it to the <div> with Id = #content
  pageHeader.innerText = "Our To Do List:";
  contents.appendChild(pageHeader);

  let toDoList = document.createElement("ul");                                  //Create the "ul" tag

  for (let action of todos) {                                                   //Iterate through the list
    let eachList = document.createElement("li")                                 //In each iteration create a list "li", then write a text inside and style the text
    eachList.innerText = action.todo;
    eachList.style.fontSize = "30px"

    eachList.addEventListener("click", addLineThrough)                          //Add an event listener and its callback function.

    function addLineThrough() {
      if (eachList.style.textDecoration !== "line-through") {
        eachList.style.textDecoration = "line-through";
      } else {
        eachList.style.textDecoration = "none";
      }
    }

    toDoList.appendChild(eachList);                                             //Append each new list "li" to our "ul" at the top
  }

  contents.appendChild(toDoList);                                              //Append the unordered list "ul" to the <div> with Id = #content
}

const ourTodos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(ourTodos);