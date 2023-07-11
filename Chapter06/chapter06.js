// Chapter 06: JavaScript in Browser
// Console Object Methods:
console.time();
console.log(console);
console.error("A error message goes here");
console.warn("A warning message goes here");
console.info("A informative message goes here");
console.log("A information log goes here( versatile )");
const nameSurname = {
  Ajay: "Panday",
  Pawan: "Devgan",
  Ramesh: "Nagar",
};
console.table(nameSurname);
console.assert(false); // returns an error iff it has false value
// console.clear() i want logs for screenshots
console.timeEnd();

//Browser Object Model (BOM):
// alert, prompt & confirm:
alert("This is an alert⚠️"); // shows message to user
const userInputName = prompt("This is a Prompt: Enter your name here👇"); //asks for user input as string by default
console.log(userInputName, typeof userInputName);
confirm("Do you accept our T&C press Ok = 👍 and Cancel = 👎"); // retruns true = ok & false = cancel

//Document Object Model (DOM):
console.log(document.head);

// Practice Set 06:
//Q.01 //Q.02 //Q.03
const onceMore = () => {
  let userInput = Number.parseInt(prompt("Enter your age🔞:"));
  if (userInput < 0) {
    console.error("You can't go negative in age");
  }
  if (userInput >= 18) {
    alert("You can proudly drive sir!😎");
  } else {
    alert("You can't drive sir!😞");
  }
  let wantAgain = confirm("Do you want to check your Age again!♾️");
  wantAgain == true ? onceMore() : alert("Bye then👋");
};
onceMore();
//Q.04
let userInput2 = Number.parseInt(prompt("Enter a number:"));
if (userInput2 > 4) {
  location.href = "https://www.google.com";
}
//Q.05
let userInput3 = prompt("Enter text color here:", "white");
document.body.style.color = userInput3;
