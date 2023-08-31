//  Chapter10: Network Requests & Storing Data:
// Fetch API:
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/clone";

fetch(url)
  .then((response) => {
    console.log(response.status); // returns status code from server request
    console.log(response.ok); // if status code is in-between 200-299 it returns true else false
    console.log(response.headers); //we can provide aditional url attributes e.g. access token
    return response.json(); // we can only provide a single body read function at time
    // return response.text();
  })
  .then((data) => {
    console.log(`Success: ${data}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

// Post method using Fetch API:
const url2 = "https://jsonplaceholder.typicode.com/posts";
const createAPostRequest = async (resources) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(resources),
  };
  let response = await fetch(url2, options);
  let data = response.json();
  return data;
};
const getResponseWithID = async (id) => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  let data = response.json();
  return data;
};
const mainFunction = async () => {
  let resources = {
    title: "Ray",
    body: "Dark",
    userId: 64,
  };
  let AfterPOSTResponse = await createAPostRequest(resources);
  console.log(AfterPOSTResponse);
  console.log(await getResponseWithID(96));
};
mainFunction();

// Cookies in JavaScript:
document.cookie = "name=walterWhite";
document.cookie = "name1=stewie";
document.cookie = "name2=peterGriffin";
let key = prompt("Enter a key");
let value = prompt("Enter a value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);

// Localstorage in JavaScript:
