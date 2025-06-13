const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is the promise resolved");
  }, 10000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is the promise resolved");
  }, 5000);
});

// async function getData1() {
//   promise.then((res) => console.log(res));
// }

// function getData2() {
//   promise.then((res) => console.log(res));
// }

function handlePromise() {
  console.log("Hello world");
  promise.then((res) => console.log(res));
  console.log("WHat is up");
}

async function handlePromiseAsync() {
  console.log("Hello world");
  const res1 = await promise1;
  console.log(res1);
  const res2 = await promise2;
  console.log(res2);
  console.log("What is up");
}

// handlePromise();
// console.log("##########");
handlePromiseAsync();
