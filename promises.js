// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function () {
//   proceedToPayment(order);
// });

// const GITHUB_API = "https://api.github.com/users/akshithg05";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });

const cart = ["shoes", "shirt", "football"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId); // returning promise itself
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create Order - calls to db , etc
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // logic for create order
    const orderId = "12345";
    if (orderId) {
      // fake delay
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  /////
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCart(cart) {
  return true;
}
