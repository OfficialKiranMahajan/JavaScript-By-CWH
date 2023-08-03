//Chapter09: Callback, Promises & asnyc/await...
// Callback Function:

// a Higher-Order function
const higherOrderFunction = (callbackFunction) => {
  setTimeout(() => {
    console.log("I'm from setTimeout from inside a higher order function");
    callbackFunction(); // Invoking after callback function finishing above code
  }, 3000);
};
// a Callback Function
const afterSetTimeout = () => {
  console.log("Im a callback function passed to a higher order function ");
};
//Invoking a HOF with Callback Function
higherOrderFunction(afterSetTimeout);

// CWH's example of callback and Error handling:
const loadScript = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    // function if there is no error
    console.log("Loaded Script with SRC: " + src);
    callback(null, src);
  };
  script.onerror = () => {
    // function after getting an error
    console.log(`this ${src} Script producing an error`);
    callback(
      new Error(
        "given CDN{Content Delivery Network} js link is not valid inside <script>"
      )
    );
  };
  document.body.appendChild(script);
};
// a callback function
const afterSuccess = (error, src) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("afterSuccess Function is called ohk--->" + src);
};

// HOF invokation with afterSuccess as an argument
loadScript(
  "https://cdnjs.cloud.flare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
  afterSuccess
);
