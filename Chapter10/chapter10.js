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
