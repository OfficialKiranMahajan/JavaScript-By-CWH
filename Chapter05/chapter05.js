// Chapter05: Arrays
// Array Methods:
const Fruits = ["banana:🍌", "apple:🍏", "mango:🥭", "pear:🍐", "grapes:🍇"];
console.log("length of Fruits array: ", Fruits.length);
Fruits[4] = "melon:🍈"; // changed element of an array
console.log(Fruits, "type of an array is: ", typeof Fruits);
console.log(Fruits.toString()); //converts to string
console.log(Fruits.join(" OR ")); //joins with specified separator returns string string
console.log(Fruits.pop()); // pops-out last element and returns it
console.log(Fruits.push("watermelon: 🍉")); // inserts a new element at the end of an array and returns array length
console.log(Fruits);

console.log(Fruits.shift()); // Removes 1st element and returns it
console.log(Fruits.unshift("pineapple:🍍")); // inserts element to beginnin and returns length of an array
console.log(delete Fruits[1], "length of Fruits array: ", Fruits.length);

const Animals = ["lion:🦁", "tigar:🐯", "fox:🦊"];
console.log(Fruits.concat(Animals)); // we can concat more than 1 array to an existing array it make new array
console.log(Fruits);
console.log(Fruits.sort()); //sorts an original array alphabetically irrespective of data types of values

const num = [20, 70, 40, 33, 60, 58];
const compareFunction = (a, b) => a - b; // this is a compare func for sort() which sorts numbers in Ascending order
console.log(num.sort(compareFunction)); // it takes compare func as basis of comparison

console.log(Animals.splice(1, 2, "monkey:🐵", "dog:🐶", "cat:😺")); // returns deleted values makes changes to original array
console.log(Animals);
console.log(Animals.slice(0, 1)); // returns deleted element with given range for removal last para. is not included
console.log(Animals); // slice returns new array doesn't make any change to original array

const sequence = ["first", "second", "third"];
console.log(sequence.reverse()); // boooom 💥 an array gets reversed

// Looping through Arrays
const numbers = [20, 50, 20, 25, 10, 70, 45];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] + 2);
} // classic for loop for accessing array elements
console.log("\n");

numbers.forEach((num, index) => {
  console.log("Index: " + index + " Element: " + num);
}); // forEach is same as map but makes changes to original array
console.log("\n");

for (const num of numbers) {
  console.log(num);
}
console.log("\n");

for (const key in numbers) {
  console.log(key);
}
const fullName = "Kiran_Majajan";
console.log(Array.from(fullName));

// map, filter and reduce
const arr0 = [10, 20, 60, 70, 20, 40, 30];
let a = arr0.map((num) => {
  return num + 1;
}); // does not make any change to original array
console.log(a);

let b = arr0.filter((num) => {
  return num >= 60;
}); //
console.log(b);
console.log("This is an original array: ", arr0);
let c = arr0.reduce((val1, val2) => {
  return val1 + val2;
});
console.log("Sum of all elements of array : ", c);

// Practice Set 05
// Q.01
const arr1 = [10, 15, 28, 11, 33, 77];
let userInput = prompt("Enter a number: ");
userInput = Number.parseInt(userInput);
arr1.push(userInput);
console.log(arr1);

// Q.02
let userInput1;
do {
  userInput1 = prompt("Enter a number: ");
  userInput1 = Number.parseInt(userInput1);
  arr1.push(userInput1);
} while (userInput1 != 0);
console.log(arr1);

// Q.03
const arr3 = [20, 47, 55, 100, 30, 19];
let divisibleby10 = arr3.filter((num) => {
  return num % 10 == 0;
});
console.log(divisibleby10);

// Q.04
let squareArray = arr3.map((num) => {
  return num ** 2;
});
console.log(squareArray);

// Q.05
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let factorialOfN = arr4.reduce((num1, num2) => {
  return num1 * num2;
});
console.log(factorialOfN);
