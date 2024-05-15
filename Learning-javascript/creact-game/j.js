let userScore = 0;
let compScore = 0;

const Choices = document.querySelectorAll(".choice");

const genCompChoice = (() => { 
    const opstion =["rock", "paper", "scissors"]
    const rendIdx = Math.floor(Math.random() * 3);
    return opstion[rendIdx];
})

const drawGame = (()=> {
    console.log("game was draw.");
})

const PlayGame = ((userChoice) => {
    console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
})

Choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        PlayGame (userChoice)
    })
})