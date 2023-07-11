console.log("Variable in Js is just a container with some value in it");

//*      var is global scoped
//*      only var get initialized with undefined
var a = "this is var";
var a = "this is re-declared var"; //* Will not throw any error
a = "this is updated var";
console.log(a);

//*      let and const are block scoped
//*      let and const does not initialized with any placeholder like undefined
let m = "this is let";
m = "this is updated let";
//* let m = "this is re-declared let";
//! ----> SyntaxError: Identifier 'm' has already been declared
const n = "this is const";
//* n="this is updated const"
//! ----> TypeError: Assignment to constant variable
//* const n = "this is re-declared const"
//!----> SyntaxError: Identifier 'n' has already been declared

//*      Primitive Data types in Js i.e. nn bb ss u
let p = null;
let q = 68;
let r = true;
let s = BigInt("573") + BigInt("3");
let t = "hi Ray";
let u = Symbol("its a symbol🔣");
let v; //*  undefind

//*      Non-Primitive Data types in Js i.e. Object
const dataOfStudent = {
  name: "Kiran Mahajan",
  rollNo: 17,
  marks: 9,
};

//? Practice Set 01
// Q.01
let k = "68";
console.log(k + 1);
// Q.02
console.log(typeof (k + 1));
// Q.03
const smallObject = {
  fruit: "banana",
  color: "yellow",
};
//* smallObject = 43;   We can't change a const object
// Q.04
smallObject["fruit"] = "apple"; //*  but we can change const object properties
console.log(smallObject.fruit);
// Q.05
const wordMeaning = {
  summary:
    "a short description of the main ideas or points of something but without any details",
  clone:
    "an exact copy of a plant or animal that is produced from one of its cells by scientific methods",
  productive: "that makes or grows something, especially in large quantities",
  relatable: "able to be related to something else",
  convenient:
    "suitable or practical for a particular purpose; not causing difficulty",
};
console.log(wordMeaning.clone);
console.log(wordMeaning["convenient"]);
