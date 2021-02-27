//  PART ONE

let blueButton = document.querySelectorAll(".primary-content > button");            //Here we get a node list which contains the 3 buttons
for (i = 0; i < blueButton.length; i++) {                                           //Since it is an array like list, we can iterate over it and add event listener to each one 
    blueButton[i].addEventListener("click", changeColour)
}
function changeColour(e) {                                                          //We are adding the "event object" as a parameter
    if (e.target.outerText === "Blue") {                                              //the property "e.target" have another property called "outerText",
        let jumbotron = document.querySelector(".jumbotron");                       //Which gives us a value of the text inside the button e.g. <button> Blue </button> is same as <button> e.target.outerText </button>
        jumbotron.style.backgroundColor = "#588fbd";

        let donate = document.querySelector(".buttons > .btn-primary");
        donate.style.backgroundColor = "#ffa500";

        let volunteer = document.querySelector(".buttons > .btn-secondary")
        volunteer.style.backgroundColor = "black";
        volunteer.style.color = "white";

    } else if (e.target.outerText === "Orange") {
        let jumbotron = document.querySelector(".jumbotron");
        jumbotron.style.backgroundColor = "#f0ad4e";

        let donate = document.querySelector(".buttons > .btn-primary");
        donate.style.backgroundColor = "#5751fd";

        let volunteer = document.querySelector(".buttons > .btn-secondary")
        volunteer.style.backgroundColor = "#31b0d5";
        volunteer.style.color = "white";
    } else if (e.target.outerText === "Green") {
        let jumbotron = document.querySelector(".jumbotron");
        jumbotron.style.backgroundColor = "#87ca8a";

        let donate = document.querySelector(".buttons > .btn-primary");
        donate.style.backgroundColor = "black";

        let volunteer = document.querySelector(".buttons > .btn-secondary")
        volunteer.style.backgroundColor = "#8c9c08";
    }
}

// PART TWO

let formButton = document.querySelector("form > button");
formButton.addEventListener("click", validateForm)

function validateForm(e) {
    e.preventDefault()
    let email = document.querySelector("#exampleInputEmail1");
    if (email.value.includes("@") === false) {
        email.style.backgroundColor = "red"
    }

    let name = document.querySelector("#example-text-input");
    if (name.value.length === 0) {
        name.style.backgroundColor = "red"
    }

    let description = document.querySelector("#exampleTextarea");
    if (description.value.length === 0) {
        description.style.backgroundColor = "red"
    }

    if (email.value.includes("@") && name.value.length > 0 && description.value.length > 0) {
        email.value = "";
        name.value = "";
        description.value = "";
        alert("Thank you for filling out the form")
    }
}

