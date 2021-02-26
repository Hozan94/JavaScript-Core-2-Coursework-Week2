function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  for (let person of arrayOfPeople) {
    let firstHeader = document.createElement("h1");
    firstHeader.innerText = person.name;
    content.appendChild(firstHeader);

    let secondHeader = document.createElement("h2");
    secondHeader.innerText = person.job;
    content.appendChild(secondHeader);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
