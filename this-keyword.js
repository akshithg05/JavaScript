// console.log(this);
// "use strict";
function x() {
  console.log(this);
}
// x();

const student = {
  name: "Akshith",
  printName: function () {
    console.log(this.name);
  },
};

const student2 = {
  name: "Anushka",
};

// student.printName();
// student.printName.call(student2);

function test() {
  const x = 10;
  console.log(this);
}

// test();

const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj2.x();
