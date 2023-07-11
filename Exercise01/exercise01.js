const guessTheNumber = () => {
  const randomNum = Math.floor(Math.random() * 100 + 1);
  let chances = 100;
  let userInput;

  do {
    // asking userInput in a loop
    userInput = parseInt(prompt("Guess any number between 1 to 100🤔: "));
    --chances;

    if (userInput === randomNum) {
      console.log(
        `After ${
          100 - chances
        } attempts😮‍💨 You guessesd it right!👍 it's "${userInput}" \n Your Score is ${chances}`
      );
      continue;
    } else if (userInput < randomNum) {
      console.log(
        "The number you've entered is less than the Hidden one..👉Try Again!"
      );
      --chances;
      continue;
    } else if (userInput > randomNum) {
      console.log(
        "The number you've entered is Greater than the Hidden one..👉Try Again!"
      );
      --chances;
      continue;
    }
  } while (userInput !== randomNum);
};
guessTheNumber();
