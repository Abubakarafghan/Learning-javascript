let userScore = 0;
let compScore = 0;

const Choices = document.querySelectorAll(".choice");

Choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log("you are", userChoice)
    })
})