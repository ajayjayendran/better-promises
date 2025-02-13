// Resolves with first fulfilled Promise

Promise.any([
  Promise.reject("Error"),
  Promise.resolve("Success 1"),
  Promise.reject("Success 2"),
]).then((value) => console.log("Any Fulfilled Promise - ", value));

// Waits for all promises to resolve or reject.
// If any promises in the array rejects, immediately rejects with first rejection reason.
Promise.all([Promise.resolve(10), Promise.reject(20), Promise.reject(30)])
  .then((value) => console.log(value, "value"))
  .catch((error) => console.error(error, "error"))
  .finally(console.log);

// Waits for all promises to settle (resolve or reject)
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failed"),
  Promise.resolve("Another success"),
]).then(console.log);

// Result of first settled promise
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("Fast"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Slow"), 501)),
]).then(console.log);
