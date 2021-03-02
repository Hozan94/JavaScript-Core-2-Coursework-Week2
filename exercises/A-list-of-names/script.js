function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  for (let person of arrayOfPeople) {
    let firstHeader = document.createElement("h1");
    firstHeader.innerText = person.name;

    let secondHeader = document.createElement("h2");
    secondHeader.innerText = person.job;

    content.append(firstHeader, secondHeader);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
