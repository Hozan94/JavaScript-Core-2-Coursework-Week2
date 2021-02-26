function shoppingList(arrayOfItems) {
  let contents = document.querySelector("#content");
  let ourList = document.createElement("ul");

  for (let item of arrayOfItems) {
    let eachList = document.createElement("li");
    eachList.innerText = item;
    ourList.appendChild(eachList);
  }
  contents.appendChild(ourList);

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
