const x = 1;
a();
b();
console.log(x);

function a() {
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
