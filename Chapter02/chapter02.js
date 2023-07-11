// these also count as Expressions
"Ray";
17;

// Operators in js
// Arithmetic Operators
let a = 7;
console.log("a=7");
console.log("a+2 = ", a + 2); // addition
console.log("a-2 = ", a - 2); // subtraction
console.log("a*2 = ", a * 2); // multiplication
console.log("a/2 = ", a / 2); // division
console.log("a%2 = ", a % 2); // returns remainder
console.log("a++ = ", a++); // prints then adds---increament
console.log("++a = ", ++a); // adds then prints
console.log("a-- = ", a--); // prints then subtracts---decrement
console.log("--a = ", --a); // subtracts then prints

// Assignment Operators
let b = 0;
console.log("\nb=0");
console.log("b=11 ", (b = 11));
console.log("b+=2", (b += 2));
console.log("b-=2", (b -= 2));
console.log("b*=2", (b *= 2));
console.log("b/=2", (b /= 2));
console.log("b%=3", (b %= 3));
console.log("b**=5", (b **= 5));

// Comparison Operators -- returns boolean
let c = 3;
let d = 2;
let e = "3";
console.log("\nc=3, d=2 and e='3'");
console.log("c==d", c == d);
console.log("c!=d", c != d);
console.log("c===e", c === e);
console.log("c!==e", c !== e);
console.log("c>d", c > d);
console.log("c>=d", c >= d);
console.log("c<d", c < d);
console.log("c<=d", c <= d);
console.log("Is c < d?", c < d ? "ans: Yes" : "ans: No"); // condition ? value if true : value if false

// Logical Operators
let x = 10;
let y = 6;
console.log("\nx=10 and y=6");
console.log("x>y && y<x", x > y && y < x); // true true then true, else false.
console.log("x>y || y>x", x > y || y > x); // true false then true, else false.
console.log("x!=y", x != y); // inverts.

// Conditional Statements
/*
if
if...else
if...else if
*/
if (x > y) {
  console.log("\nx is big");
} else if (x < y) {
  console.log("y is big");
} else {
  console.log("both are equal");
}
let p = "apple";
// switch
switch (p) {
  case "banana":
    console.log("The banana is actually classified as a berry.");
    break;
  case "apple":
    console.log("Apples Are 25% Air.");
    break;
  case "pear":
    console.log("Pears are a good source of vitamin C.");
    break;

  default:
    console.log("No more fruit facts");
    break;
}

// Practice Set 02

// Q.01
console.log("\nI've given 18 as input to prompt");
let age = prompt("\nEnter Your Age: ");
age = Number.parseInt(age);
console.log(typeof age);
if (age >= 10 && age <= 20) {
  console.log("Your age ranges between 10 and 20.");
} else {
  console.log("Your age doesn't ranges between 10 and 20.");
}

// Q.02
switch (age) {
  case 18:
    console.log("You are adult now");
    break;
  case 30:
    console.log("You are a Middle-aged Adult");
    break;
  case 45:
    console.log("You are Old Adult");
    break;
  default:
    console.log("your age is just number enjoy life man!");
    break;
}
// Q.03
if (age % 2 == 0 && age % 3 == 0) {
  console.log("Your age is divisible by 2 & 3");
} else {
  console.log("Your age is Not divisible by 2 & 3");
}
// Q.04
if (age % 2 == 0) {
  console.log("Your age is divisible by only 2.");
} else if (age % 3 == 0) {
  console.log("Your age is divisible by only 3.");
} else {
  console.log("Your age is Not divisible by either 2 or 3");
}
// Q.05
console.log(age >= 18 ? "You can drive" : "You cannot drive");
