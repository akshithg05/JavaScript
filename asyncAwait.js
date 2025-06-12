// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This promise is resolved 1");
//   }, 5000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This promise is resolved 2");
//   }, 10000);
// });

// async function getData1() {
//   console.log("Hello World");

//   const res1 = await promise1;
//   console.log(res1);

//   const res2 = await promise2;
//   console.log(res2);

//   console.log("Final statement");
// }

// getData1();

const GITHUB_API = "https://api.github.com/users/akshithg5";
async function handlePromise() {
  const res = await fetch(GITHUB_API); // Retruns a promise, which, on resolving will return Response Object
  const data = await res.json(); // Returns a promise which on resolvoing wil give us json body
  console.log(data);
}

handlePromise().catch((err) => console.log(err));
