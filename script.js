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

function getHumanChoice() {
	let playerChoice = prompt("Rock, Paper, Scissors... Shoot!");
	let returnChoice = "";

	if (playerChoice.toUpperCase() === "SCISSORS") {
		returnChoice = "Scissors"
	} else if (playerChoice.toUpperCase() === "PAPER") {
		returnChoice = "Paper"
	} else if (playerChoice.toUpperCase() === "ROCK") {
		returnChoice = "Rock"
	}

	return returnChoice;
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function playRound() {
		humanChoice = getHumanChoice();
		console.log(`Player: ${humanChoice}`);
		computerChoice = getComputerChoice();
		console.log(`Computer: ${computerChoice}`);
	
		if (humanChoice === "Rock") {
			if (computerChoice === "Scissors") {
				console.log("You win! Rock beats Scissors");
				humanScore++;
			} else if (computerChoice === "Paper") {
				console.log("You lose! Paper beats Rock");
				computerScore++;
			} else if (computerChoice === "Rock") {
				console.log("Tie! Rock is ineffective against Rock");
			}
		} else if (humanChoice === "Paper") {
			if (computerChoice === "Scissors") {
				console.log("You lose! Scissors beats Paper");
				computerScore++;
			} else if (computerChoice === "Paper") {
				console.log("Tie! Paper is ineffective against Paper");
			} else if (computerChoice === "Rock") {
				console.log("You win! Paper beats Rock");
				humanScore++;
			}
		} else if (humanChoice === "Scissors") {
			if (computerChoice === "Scissors") {
				console.log("Tie! Scissors are ineffective against Scissors");
			} else if (computerChoice === "Paper") {
				console.log("You win! Scissors beats Paper");
				humanScore++;
			} else if (computerChoice === "Rock") {
				console.log("You lose! Rock beats Scissors");
				computerScore++;
			}
		}

		console.log(`Points - Player: ${humanScore}, Computer: ${computerScore}`);
	}

	playRound();
	playRound();
	playRound();
	playRound();
	playRound();

	console.log(`Final Score - Player: ${humanScore}, Computer: ${computerScore}`);
	if (humanScore > computerScore) {
		console.log("You win the game! You're great at this!");
	} else if (humanScore === computerScore) {
		console.log("It's a tie, better luck next time!");
	} else if (humanScore < computerScore) {
		console.log("You lose, I'm sure it's just bad luck.");
	}
}

playGame();

