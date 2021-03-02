//  PART ONE


// PE suggestion

const themes = {
    blue: {
        jumbotron: "#588fbd",
        primaryButtonColour: "#ffa500",
        secondaryButtonColour: "black",
        secondaryButtonTextColor: "white",
    },
    orange: {
        jumbotron: "#f0ad4e",
        primaryButtonColour: "#5751fd",
        secondaryButtonColour: "#31b0d5",
        secondaryButtonTextColor: "white",
    },
    green: {
        jumbotron: "#87ca8a",
        primaryButtonColour: "black",
        secondaryButtonColour: "#8c9c08",
        secondaryButtonTextColor: "#292b2c",
    },
};

let buttonList = document.querySelectorAll(".primary-content > button");            //Here we get a node list which contains the 3 buttons
for (i = 0; i < buttonList.length; i++) {                                           //Since it is an array like list, we can iterate over it and add event listener to each one 
    buttonList[i].addEventListener("click", changeColour)
}

function applyColour(colour) {
    let jumbo = document.querySelector(".jumbotron");
    jumbo.style.backgroundColor = themes[colour].jumbotron;

    let donate = document.querySelector(".buttons > .btn-primary");
    donate.style.backgroundColor = themes[colour].primaryButtonColour;

    let volunteer = document.querySelector(".buttons > .btn-secondary")
    volunteer.style.backgroundColor = themes[colour].secondaryButtonColour;
    volunteer.style.color = themes[colour].secondaryButtonTextColor;
}

function changeColour(e) {
    if (e.target.outerText === "Blue") {
        applyColour("blue")

    } else if (e.target.outerText === "Orange") {
        applyColour("orange")

    } else if (e.target.outerText === "Green") {
        applyColour("green");
    }
}

// My solution

// function changeColour(e) {                                                          //We are adding the "event object" as a parameter
//     if (e.target.outerText === "Blue") {                                              //the property "e.target" have another property called "outerText",
//         let jumbotron = document.querySelector(".jumbotron");                       //Which gives us a value of the text inside the button e.g. <button> Blue </button> is same as <button> e.target.outerText </button>
//         jumbotron.style.backgroundColor = "#588fbd";

//         let donate = document.querySelector(".buttons > .btn-primary");
//         donate.style.backgroundColor = "#ffa500";

//         let volunteer = document.querySelector(".buttons > .btn-secondary")
//         volunteer.style.backgroundColor = "black";
//         volunteer.style.color = "white";

//     } else if (e.target.outerText === "Orange") {
//         let jumbotron = document.querySelector(".jumbotron");
//         jumbotron.style.backgroundColor = "#f0ad4e";

//         let donate = document.querySelector(".buttons > .btn-primary");
//         donate.style.backgroundColor = "#5751fd";

//         let volunteer = document.querySelector(".buttons > .btn-secondary")
//         volunteer.style.backgroundColor = "#31b0d5";
//         volunteer.style.color = "white";
//     } else if (e.target.outerText === "Green") {
//         let jumbotron = document.querySelector(".jumbotron");
//         jumbotron.style.backgroundColor = "#87ca8a";

//         let donate = document.querySelector(".buttons > .btn-primary");
//         donate.style.backgroundColor = "black";

//         let volunteer = document.querySelector(".buttons > .btn-secondary")
//         volunteer.style.backgroundColor = "#8c9c08";
//     }
// }

// PART TWO

let formButton = document.querySelector("form > button");
formButton.addEventListener("click", validateForm)

function validateForm(e) {
    e.preventDefault()
    let email = document.querySelector("#exampleInputEmail1");
    if (email.value.includes("@") === false) {
        email.classList.add("input-error")
    }

    let name = document.querySelector("#example-text-input");
    if (name.value.length === 0) {
        name.classList.add("input-error")
    }

    let description = document.querySelector("#exampleTextarea");
    if (description.value.length === 0) {
        description.classList.add("input-error")
    }

    if (email.value.includes("@") && name.value.length > 0 && description.value.length > 0) {
        email.value = "";
        email.classList.add("remove-error");

        name.value = "";
        name.classList.add("remove-error");

        description.value = "";
        description.classList.add("remove-error");

        alert("Thank you for filling out the form")
    }
}

