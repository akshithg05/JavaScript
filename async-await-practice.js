const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is promise 1");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is promise 2");
  }, 10000);
});

async function getData() {
  const res1 = await p1;
  console.log(res1);

  console.log("Break line ");

  const res2 = await p2;
  console.log(res2);

  console.log("End");
}

function printHi() {
  console.log("Hi");
}

getData();
printHi();
