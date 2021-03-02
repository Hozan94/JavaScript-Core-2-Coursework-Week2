function shoppingList(arrayOfItems) {
  let contents = document.querySelector("#content");
  let ourList = document.createElement("ul");

  for (let item of arrayOfItems) {
    let eachItem = document.createElement("li");
    eachItem.innerText = item;
    ourList.appendChild(eachItem);
  }
  contents.appendChild(ourList);

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
