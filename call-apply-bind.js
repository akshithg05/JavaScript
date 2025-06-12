const user1 = {
  firstName: "Akshith",
  lastName: "Gunasheelan",
};

const printName = function (homeTown, state) {
  console.log(this.firstName + " " + this.lastName + " is from " + homeTown + " ," + state);
};

const user2 = {
  firstName: "Anushka",
  lastName: "Gunasheelan",
};

printName.call(user1, "Bengaluru", "Karnataka");
printName.apply(user2, ["Bangalore", "Karnataka"]);

const printMyName = printName.bind(user1, "Bengaluru", "Karnataka");
console.log(printMyName);
printMyName();
