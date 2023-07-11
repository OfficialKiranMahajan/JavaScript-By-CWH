// const options = ["Snake", "Water", "Gun"];
// let userSelection = Number.parseInt(
//   prompt(
//     `Welcome To The Game:\t  SNAKE || WATER || GUN \n1) Snake🐍---> 0 \n2) Water💦---> 1 \n3) Gun🔫---> 2 `
//   )
// );
// console.log(options[userSelection]);
// const computerSelection = options[Math.floor(Math.random() * options.length)];
// console.log(computerSelection);

// if (computerSelection === userSelection) {
//   console.log("It's a clear tie!");
// } else if (computerSelection == options[0] && userSelection == options[1]) {
//   console.log("Computer💻 is the winner🥇!");
// } else if (computerSelection == options[0] && userSelection == options[2]) {
//   console.log("You👦 are the winner🥇!");
// }

// Generate random computerSelection from options
const computerSelection = () => {
  const options = ["snake", "water", "gun"];
  const randomSelection = Math.floor(Math.random() * options.length);
  return options[randomSelection];
};
// Determines the winner
const winnerSelection = (userSelection, computerSelection) => {
  if (computerSelection === userSelection) {
    return "It's a clear tie!💔";
  } else if (
    // All user winning conditions
    (userSelection === "snake" && computerSelection === "water") ||
    (userSelection === "water" && computerSelection === "gun") ||
    (userSelection === "gun" && computerSelection === "snake")
  ) {
    return "You 👦 win!🥇";
  } else {
    return "Computer 💻 wins!🥇";
  }
};
// Starts game by taking user input from prompt
const startGame = () => {
  const userSelection = prompt(
    `Welcome To The Game:\t  SNAKE || WATER || GUN \n1) 🐍---> Snake \n2) 💧---> Water \n3) 🔫 ---> Gun `
  ).toLowerCase();

  const options = ["snake", "water", "gun"];
  if (!options.includes(userSelection)) {
    console.log("Don't do that⚠️🥹. Please select snake, water, or gun.");
    return;
  }
  const computer = computerSelection();
  const result = winnerSelection(userSelection, computer);
  console.log("User 👦: ", userSelection);
  console.log("Computer 💻: ", computer);
  console.log(result);
};
startGame();
