const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = arr.filter((el) => el % 2 == 0);
// const odd = arr.filter((el) => el % 2 !== 0);

// console.log(even);
// console.log(odd);

// FINDING SUM IN TRADIATION WAY
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let res = findSum(arr);
console.log(res);

// FIND SUM USING REDUCE
// First argument for reduce is the function.
// Second argument is the initial value of the accumulator.
let output = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output);

// FIND MAX IN TRADITIONAL WAY
function findMax(arr) {
  let max = -1.797693134862315e308;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

res = findMax(arr);
console.log(res);

output = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, -1.797693134862315e308);

console.log(output);

const users = [
  {
    firstName: "Alice",
    lastName: "Johnson",
    age: 26,
  },
  {
    firstName: "Brian",
    lastName: "Smith",
    age: 26,
  },
  {
    firstName: "Catherine",
    lastName: "Lee",
    age: 75,
  },
  {
    firstName: "David",
    lastName: "Brown",
    age: 50,
  },
  {
    firstName: "Eva",
    lastName: "Martinez",
    age: 30,
  },
];

const fullNames = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullNames);

// Find all the people who have same age and create an object out of it
output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output);

// first name of all peoplw whose age is less than 30
const lessThan30 = users.filter((user) => user.age < 30).map((user) => user.firstName);
console.log(lessThan30);

const lessThan30Reduce = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(lessThan30Reduce);
