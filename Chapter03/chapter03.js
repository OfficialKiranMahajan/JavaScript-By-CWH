// Chapter03: Loops & Functions--->
// Loops:
for (let i = 1; i <= 5; i++) {
  console.log(i);
} // it will print number 1 to 5

const namesOfFruits = {
  Fruit00: "banana🍌",
  Fruit01: "apple🍎",
  Fruit02: "pear🍐",
  Fruit03: "mango🥭",
};
for (const fruit in namesOfFruits) {
  console.log(fruit, " is ", namesOfFruits[fruit]);
}

const myName = ["K", "I", "R", "A", "N"];
for (const alphabet of myName) {
  console.log(alphabet);
}

console.log("\n");
let m = 0;
while (m < myName.length) {
  console.log(myName[m]);
  m++;
}

const cars = ["Ford", "Tata", "BMW"];
c = 0;
do {
  console.log("name of car company : ", cars[c]);
  c++;
} while (c < cars.length);

// Functions:
function sumOf(x, y) {
  return (x += y);
}
let a = 10;
let b = sumOf(5, 6);
console.log("5+6 = ", b);

const multiply = (x, y) => {
  return x * y;
};
console.log(multiply(a, b));

// Practice Set03
// Q.01
const marksOfStudents = {
  Ray: 41,
  Akshay: 56,
  Payal: 7,
  Mandar: 9,
};
for (let i = 0; i < Object.keys(marksOfStudents).length; i++) {
  console.log(
    "Marks Of " +
      Object.keys(marksOfStudents)[i] +
      ": " +
      marksOfStudents[Object.keys(marksOfStudents)[i]]
  );
}
console.log("\n");
// Q.02
for (const student in marksOfStudents) {
  console.log("Marks Of " + student + ": " + marksOfStudents[student]);
}
// Q.03
let askCorrectNum;
askCorrectNum = Number.parseInt(askCorrectNum);
while (askCorrectNum != 68) {
  console.log("try again!");
  askCorrectNum = prompt("Guess the correct number");
}
// Q.04
const meanOfNumbers = (a, b, c, d, e) => (a + b + c + d + e) / 5;
let mean = meanOfNumbers(1, 2, 3, 4, 5);
console.log(mean);
