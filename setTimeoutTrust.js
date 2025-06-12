console.log("Start");

setTimeout(() => {
  console.log("Callback");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While ended");
