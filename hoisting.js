getName();
console.log(x);
console.log(getName);
console.log(getName2);


var x = 7;

function getName() {
  console.log("Hello World");
}

var getName2 = () => {
  console.log("Hello 2");
};

getName2();