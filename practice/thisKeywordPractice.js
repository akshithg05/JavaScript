// This keyword inside a function and in the global space

"use strict";
console.log(this);

function x() {
  console.log("This inside a function");
  console.log(this);
}

x(); // In non -strct mode this will log undefined
window.x(); // will log the window object in non strict and strict mode

// This keyword inside an object

const objA = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

objA.x();
console.log(objA.x);
console.log(objA.a);
