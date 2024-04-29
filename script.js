let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const  msg=document.querySelector("#msg");
const userScor=document.querySelector("#user-score");
const compScor=document.querySelector("#computer-score");




const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; 
    const ind = Math.floor(Math.random() * 3);
    return options[ind];
};

const drawGame = () => {
    msg.innerText="Game was Draw. Play again";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScor.innerText = userScore;
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScor.innerText = compScore;
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
