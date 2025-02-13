const Custom = require("./custom");

const promise = new Custom.MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 100);
});

promise.then(console.log);
