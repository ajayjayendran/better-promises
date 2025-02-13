const States = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onResolvedCallbacks.forEach((fn) => fn(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        resolve(onFulfilled(this.value));
      } else if (this.state === "rejected") {
        reject(onRejected(this.reason));
      } else {
        this.onResolvedCallbacks.push(() => resolve(onFulfilled(this.value)));
        this.onRejectedCallbacks.push(() => reject(onRejected(this.reason)));
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// Export using CommonJS
module.exports = { MyPromise, States };
