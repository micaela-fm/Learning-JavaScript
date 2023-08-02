const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors" ||
        userInput === "bomb"
    ) {
        return userInput;
    } else {
        console.log("Invalid input. Please insert 'rock', 'paper', or 'scissors'.");
    }
};

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "This game is a tie!";
    }

    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    }

    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    }

    if (userChoice === "bomb") {
        return "BOOM! You win!"
    }
};

const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log("You chose " + userChoice.toUpperCase());
    console.log("The computer chose " + computerChoice.toUpperCase());
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
