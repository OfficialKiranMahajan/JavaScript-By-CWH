// Chapter04: Strings
let name0 = "Kiran"; // with ""
let name1 = "    Kiran   "; // with ''

// we can now use quotes and variables inside backticks or template literals.
let sentence0 = `this is ${name0}'s dog his name is "Prabhakar"`;
console.log(sentence0);

// Escape Sequence characters:
// let name2 = 'Adam D'Angelo'; produce error
let name2 = "\nAdam\tD'Angelo";
console.log(name2);

// String Properties and Methods:
let surname = "Mahajan";
console.log(surname.length);
console.log(surname.toUpperCase());
console.log(surname.toLowerCase());
console.log(surname.slice(0, 4)); // starts from index 0 ends 4 index, 4 excluded
console.log(surname.slice(3)); // starts from index 3 ends to end index
let name3 = "Kiran Mahajan";
console.log(name3);
console.log(name3.replace("Kiran", "Ray"));
console.log(name0.concat(" ", surname));
console.log(name1);
console.log(name1.trim());
// there are more methods/propeties of strings ohk!

// Practice Set04

// Q.01
console.log('har"'.length); // where both \" count as single char.

// Q.02
let appleFact = "Apples Are High in Fiber";
let wordToBeSearched = "Fiber";
console.log(
  `does apple cantains Fiber: ${
    appleFact.includes(wordToBeSearched) ? "Yes" : "No"
  }`
);
console.log(
  `the line appleFact starts with "App": ${appleFact.startsWith("App")}`
);
console.log(`the line appleFact ends with "ber": ${appleFact.endsWith("ber")}`);

// Q.03
console.log(appleFact.toLowerCase());
console.log(appleFact.toUpperCase());

// Q.04
let str = "please give Rs 1000";
let amount = Number.parseInt(str.slice(15));
console.log(amount);
console.log(typeof amount);

// Q.05
let fruit = "Banana";
fruit[0] = "P";
console.log(fruit); //strings are immutable
