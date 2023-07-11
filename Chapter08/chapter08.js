// Chapter08: Events & other DOM Properties

let element = document.getElementsByClassName("BoxContainer");
let commentNode = document.body.firstChild;

//console.dir(element);
console.log(element[0]);
console.dir(element[0]);

// tagName vs. nodeName
console.log(element[0].tagName); // can only be used on elementNode
console.log(commentNode.nodeName); // can be used on all nodes

// innerHTML vs. outerHTML : both can be to set and get on elementsNodes only
element[0].firstElementChild.firstElementChild.innerHTML =
  "boxOne by innerHTML"; // changes content inside selected element
element[0].firstElementChild.nextElementSibling.firstElementChild.outerHTML =
  "<h3>boxTwo by outerHTML</h3>"; // changes content + selected element

// get and set other nodes:
commentNode.data = "A commentNode after change with .data";
console.log(commentNode.data);
// or
commentNode.nodeValue = "A commentNode after change with .nodeValue";
console.log(commentNode.nodeValue);

// textContent
// element[0].firstElementChild.firstElementChild.textContent =
//   "this changed due to textContent";
console.log(element[0].firstElementChild.firstElementChild.textContent);

// Attribute Methods:
let boxOne = document.getElementById("boxOne");
let boxTwo = document.getElementById("boxTwo");
let boxThree = document.getElementById("boxThree");
let boxFour = document.getElementById("boxFour");
let boxFive = document.getElementById("boxFive");

let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");
let btnFive = document.getElementById("btnFive");

const hasAttributeFunction = () => {
  console.log(boxOne.hasAttribute("id"));
}; // checks existence of attribute within HTML onclick

btnTwo.onclick = function () {
  console.log(boxTwo.getAttribute("class"));
}; // returns value of given attribute within js onclick

btnThree.addEventListener("click", function () {
  boxThree.setAttribute("id", "boxSetAttribute");
}); // set an attribute a value if attribute does't exists it creats one with addEventListner

btnFour.addEventListener("click", function () {
  boxFour.removeAttribute("id");
}); // removes attribute

btnFive.addEventListener("click", function () {
  console.log(boxFive.attributes);
}); // returns collection of attributes

// custom attributes data-*:
console.log(boxFive.dataset);
console.log(boxFive.dataset.name);

// Insertion methods:
const paraOne = document.createElement("p"); // creates an element and stores it into paraOne
paraOne.className = "paragraphOne"; // sets a class="paragraphOne"
paraOne.innerHTML =
  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vitae saepe adipisci! Tenetur error ipsa voluptatibus accusantium qui nostrum natus rerum, delectus in ipsam! Fugit laudantium quo labore in nostrum praesentium, magnam aliquid doloremque "; // inserts content inside <p></p>
document.getElementById("insertionContainer").appendChild(paraOne); // inserts it into the selected element but at the end

