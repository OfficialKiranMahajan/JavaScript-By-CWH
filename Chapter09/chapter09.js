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

// asnyc & await:
const asyncAwaitFunction = async () => {
  // function should include async to work await inside function's block
  let mumbaiWheather = new Promise((resolve, reject) => {
    setTimeout(() => {
      // created a dummy promise which resolving with a string
      resolve("Mumbai Wheather got resolved!🐼");
    }, 2000);
  });
  let jalgaonWheather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Jalgaon Wheather got resolved!🐸");
    }, 5000);
  });
  console.log("Fetching Mumbai Wheather...");
  let mumbai = await mumbaiWheather; // awaits waits for the Promise fulfillment then goes to another line of code
  console.log("Mumbai Wheather Fetched Successfully!");

  console.log("Fetching Jalgaon Wheather...");
  let jalgaon = await jalgaonWheather; // or we can say await stops the natural flow of function execution
  console.log("Jalgaon Wheather Fetched Successfully!");

  return [mumbai, jalgaon];
};
let a = asyncAwaitFunction(); // invoking function pretty basic comment lol😂
a.then((value) => {
  console.log(value);
});

// Error Handling: try...catch, custom errors & finally Clause --->

try {
  // ray;
  throw new ReferenceError("Emotions are not in control👹"); // more types of Errors are there, Check MDN
} catch (error) {
  console.log(error.name + "\n" + error.message); // error object
} finally {
  console.log("finally, I'm constant i never care of try...catch's execution"); // Irrespective of try...catch's executions, always executes its code😈
}

// Practice Set 09:
// Q.01
const loadscript3 = (srcUrl) => {
  return new Promise((resolve, reject) => {
    let script3 = document.createElement("script");
    script3.src = srcUrl;
    document.body.appendChild(script3);
    script3.onload = () => {
      resolve("loadscript3 is resolved🤘🏻");
    };
  });
};

// loadscript3(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
// ).then((message) => {
//   alert("loadscript is loaded successfully! with resolve message: " + message);
// });

// Q.02
const mainFunction = async () => {
  let a = await loadscript3(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
  );
  console.log(a);
};
console.time(mainFunction);
mainFunction();
console.timeEnd(mainFunction);

// Q.03
const aPromisesss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("oops! promise got rejected after 3sec🥲");
    }, 3000);
  });
};

const promisesssValue = async () => {
  try {
    let value = await aPromisesss();
    console.log(value + " Yeah that true😈");
  } catch (error) {
    console.log(error);
  }
};
promisesssValue();

// Q.04

const promise01 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(40);
    }, 3000);
  });
};
const promise02 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(80);
    }, 5000);
  });
};
const promise03 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 2000);
  });
};

const run = async () => {
  console.time("Normal run");
  let p1 = await promise01(); // fetching 10 items from database
  let p2 = await promise02(); // fetching another 10 items from database
  let p3 = await promise03(); // fetching yet another 10 items from database
  console.log(p1, p2, p3); // it takes 10+ sec to execute
  console.timeEnd("Normal run");

  console.time("OP run");
  // An optimised way of doing same using promise.all
  let op1 = promise01(); // fetching 10 items from database
  let op2 = promise02(); // fetching another 10 items from database
  let op3 = promise03(); // fetching yet another 10 items from database
  let allOP = await Promise.all([op1, op2, op3]);
  console.log(allOP); // it takes 5+ sec to execute
  console.timeEnd("OP run");
};

run();
