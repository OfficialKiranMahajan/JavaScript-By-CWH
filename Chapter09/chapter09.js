// Callback Function:

// Higher-Order function
const higherOrderFunction = (callbackFunction) => {
  setTimeout(() => {
    console.log("I'm from setTimeout from inside a higher order function");
    callbackFunction(); // Invoking after callback function finishing above code
  }, 3000);
};
// Callback Function
const afterSetTimeout = () => {
  console.log("Im a callback function passed to a higher order function ");
};
// HOF with Callback Function
higherOrderFunction(afterSetTimeout);
