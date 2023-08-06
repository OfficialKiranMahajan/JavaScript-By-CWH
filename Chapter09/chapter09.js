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
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
  afterSuccess
);

// Introduction to Promises:
let aPromise = new Promise((resolve, reject) => {
  // Promise who promises the execution of code either it gets resovled or gets rejected.
  console.log("hey! I'm from a promise outside the setTimeout() "); // snyc execution
  setTimeout(() => {
    console.log("hey! I'm from a promise inside the setTimeout()"); // async execution
    // resolve("aPromise is resolved!");
    reject(new Error("promise got rejected with ERROR!"));
    console.log(aPromise);
  }, 2000);
});
// aPromise.then((value) => {
//   console.log(value + " I'm After .then");
// });
aPromise.catch((error) => {
  console.log(error + " this error occured sir!");
});

// ChatGPT Promise Example:
// Creating a Promise that represents an HTTP request
const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        resolve(data); // Fulfill the Promise with the fetched data
      })
      .catch((error) => {
        reject(error); // Reject the Promise with the error
      });
  });
};
// Using the fetchData Promise
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetchData(apiUrl)
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Promises Chaining:

// const loadScript2 = (src) => {
//   return new Promise((resolve, reject) => {
//     let script2 = document.createElement("script");
//     script2.src = src;
//     document.body.appendChild(script2);
//     if (script2.onload == true) {
//       console.log(`Script with ${src} is inserted successfully!`);
//     } else {
//       throw new Error("Sry unexpectedly script failed to load");
//     }
//   }).then(() => {
//     resolve(1);
//   });
// };

// loadScript2(
//   "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
// );
