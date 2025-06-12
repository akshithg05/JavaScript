console.log("Start");

var count = 0;
document.getElementById("button").addEventListener("click", () => {
  console.log("I am clicked: ", count++);
});

console.log("End");
