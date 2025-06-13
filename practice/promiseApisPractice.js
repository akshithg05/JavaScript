const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const success = "Promise 1 successful";
    // resolve(success);
    const failure = "Promise 1 failed";
    reject(failure);
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = "Promise 2 successful";
    resolve(success);
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = "Promise 3 successful";
    resolve(success);
    // const failure = "Promise 3 failed";
    // reject(failure);
  }, 1000);
});

// Fail fast mechanism, if all are resolved it will give arry of all the successful promises and it will take max time of the longest promise
// If any of hte promise fails it will immediately throw error and we dont know rest of the promises result.
Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log("ANY");
    console.log(res);
  })
  .catch((err) => {
    console.log("ANY");
    console.log(err);
  });

// Waits for each and every promise to settle, returns array of promises with respective results , either fulfilled(resolved) or rejected
Promise.allSettled([promise1, promise2, promise3])
  .then((res) => {
    console.log("ALL SETTLED");
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Returns the first settled promise (irrespective of rejected or resolved)
Promise.race([promise1, promise2, promise3])
  .then((res) => {
    console.log("RACE condition");
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
