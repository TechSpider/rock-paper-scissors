let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let choiceRand = Math.floor(Math.random() * 3 + 1);
	let returnChoice = "";

	if (choiceRand === 1) {
		returnChoice = "Scissors";
	} else if (choiceRand === 2) {
		returnChoice = "Paper";
	} else if (choiceRand === 3) {
		returnChoice = "Rock";
	}

	return returnChoice;
}

function getHumanChoice(choiceID) {
	let playerChoice = choiceID;
	let returnChoice = "";

	if (playerChoice === "scissors-button") {
		returnChoice = "Scissors"
	} else if (playerChoice === "paper-button") {
		returnChoice = "Paper"
	} else if (playerChoice === "rock-button") {
		returnChoice = "Rock"
	}

	return returnChoice;
}

function playGame() {
	const choiceButtons = document.querySelectorAll("button");

	choiceButtons.forEach((button) => {
		button.addEventListener("click", playRound);
	});
}

function playRound(event) {
	const buttonID = event.target.id;
	const computerChoiceDisplay = document.querySelector("#computer-choice");
	const resultDisplay = document.querySelector("#result");
	const humanScoreDisplay = document.querySelector("#human-points");
	const computerScoreDisplay = document.querySelector("#computer-points");

	humanScoreDisplay.textContent = `Human: ${humanScore}`;
	computerScoreDisplay.textContent = `Computer: ${computerScore}`;
	
	humanChoice = getHumanChoice(buttonID);
	computerChoice = getComputerChoice();
	computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;

	if (humanChoice === "Rock") {
		if (computerChoice === "Scissors") {
			resultDisplay.textContent = "You win! Rock beats Scissors";
			humanScore++;
		} else if (computerChoice === "Paper") {
			resultDisplay.textContent = "You lose! Paper beats Rock";
			computerScore++;
		} else if (computerChoice === "Rock") {
			resultDisplay.textContent = "Tie! Rock is ineffective against Rock";
		}
	} else if (humanChoice === "Paper") {
		if (computerChoice === "Scissors") {
			resultDisplay.textContent = "You lose! Scissors beats Paper";
			computerScore++;
		} else if (computerChoice === "Paper") {
			resultDisplay.textContent = "Tie! Paper is ineffective against Paper";
		} else if (computerChoice === "Rock") {
			resultDisplay.textContent = "You win! Paper beats Rock";
			humanScore++;
		}
	} else if (humanChoice === "Scissors") {
		if (computerChoice === "Scissors") {
			resultDisplay.textContent = "Tie! Scissors are ineffective against Scissors";
		} else if (computerChoice === "Paper") {
			resultDisplay.textContent = "You win! Scissors beats Paper";
			humanScore++;
		} else if (computerChoice === "Rock") {
			resultDisplay.textContent = "You lose! Rock beats Scissors";
			computerScore++;
		}
	}



	if ((humanScore < 5) && (computerScore < 5)) {
		humanScoreDisplay.textContent = `Human: ${humanScore}`;
		computerScoreDisplay.textContent = `Computer: ${computerScore}`;
	} else if (humanScore === 5) {
		humanScoreDisplay.textContent = `Human: ${humanScore}`;
		computerScoreDisplay.textContent = `Computer: ${computerScore}`;

		if (humanScore > computerScore) {
			resultDisplay.textContent = "You win the game! You're great at this!";
		} else if (humanScore === computerScore) {
			resultDisplay.textContent = "It's a tie, better luck next time!";
		}
	} else if (computerScore === 5) {
		humanScoreDisplay.textContent = `Human: ${humanScore}`;
		computerScoreDisplay.textContent = `Computer: ${computerScore}`;

		if (humanScore < computerScore) {
			resultDisplay.textContent = "You lose! Better try again!";
		} else if (humanScore === computerScore) {
			resultDisplay.textContent = "It's a tie, better luck next time!";
		}
	}
}

playGame();