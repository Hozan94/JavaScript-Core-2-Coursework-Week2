function listOfColours(colours) {
  let contents = document.querySelector("#content");
  let dropMenu = document.createElement("select");
  let paragraph = document.createElement("p");
  paragraph.innerText = `You have selected:`;

  for (let colour of colours) {
    let option = document.createElement("option");
    option.innerText = colour;
    dropMenu.appendChild(option);
  }

  dropMenu.addEventListener("change", addColour);
  
  function addColour(e) {
    paragraph.style.backgroundColor = e.target.value;
    paragraph.innerText = `You have selected: ${e.target.value}`;
  }

  contents.appendChild(paragraph);
  contents.appendChild(dropMenu);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
