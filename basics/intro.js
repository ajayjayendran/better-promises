const MyPromises = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 500);
});

MyPromises.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log(error);
});
