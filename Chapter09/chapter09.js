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
const loadScript2 = (src) => {
  return new Promise((resolve, reject) => {
    let script2 = document.createElement("script");
    script2.src = src;
    script2.setAttribute("defer", "");
    document.head.appendChild(script2);
    script2.onload = () => {
      resolve(`Script with ${src} is inserted successfully!`); // onload promise gets resolved
    };
    script2.onerror = () => {
      reject(new Error("Sry unexpectedly script failed to load")); // onerror promise gets rejected
    };
  });
};

loadScript2("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js") // Invoking loadscript2 func with src
  .then((message) => {
    console.log(message); // prints resolved message
    return loadScript2(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
    );
  })
  .then((value) => {
    console.log("This is after another then 😎 " + value); // prints it after getting a new src with invokation of loadscript2
  })
  .catch((err) => {
    console.log(err); // catchs error and prints it if promise gets rejected
  });

// Attaching Multiple Handlers to a Promise
const dataReturn = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("\nhey!🚀");
    // resolve(100);
    reject(new Error("promise got rejected🥹"));
  }, 4000);
});

dataReturn.then((value) => {
  console.log(value + 50);
});
dataReturn.then((value) => {
  console.log(value + 100);
});
dataReturn.catch((errrr) => {
  console.log(errrr.message);
});

// Promise API- Application Programming Interface:
const randomPromise01 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("randomPromise01 is resolved!🦸🏻");
    // reject("Oops!😕");
  }, 4000);
});
const randomPromise02 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("randomPromise02 is resolved!🦸🏻‍♂️");
    // reject("Oops!🙃");
  }, 2000);
});
const randomPromise03 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("randomPromise03 is resolved!🦸🏻‍♀️");
    // reject("Oops!🫤");
  }, 3000);
});

// Different Methods:
const allPromises = Promise.all([
  // after resolving all promises it returns an array of resolved values an error of any of promise can cause overall error
  randomPromise01,
  randomPromise02,
  randomPromise03,
]).then((value) => {
  console.log(value);
});

const allSettledPromises = Promise.allSettled([
  // returns an array of values of promises eventhough any of them causes error
  randomPromise01,
  randomPromise02,
  randomPromise03,
]).then((value) => {
  console.log(value);
});

const racePromises = Promise.race([
  // first resolved first served if error happens in ay of the promise results in overall error
  randomPromise01,
  randomPromise02,
  randomPromise03,
]).then((value) => {
  console.log(value);
});

const anyPromises = Promise.any([
  // returns any of resolved promise value irrespective of any error if all gets rejected returns aggregate error
  randomPromise01,
  randomPromise02,
  randomPromise03,
]).then((value) => {
  console.log(value);
});

const resolvedPromises = Promise.resolve(
  "resolved promise using Promise.resovled()" // Resolves Promise
).then((value) => {
  console.log(value);
});

const rejectedPromises = Promise.reject(
  new Error("used Promise.reject() to reject promise") // Rejects Promise
).then((value) => {
  console.log(value);
});
