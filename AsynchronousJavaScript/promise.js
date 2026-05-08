
/*
Promise -> JS Object that allows async method to behave like the sync.
States: pending, fulfilled, rejected.
*/

/*
syntax->
let myPromise = new Promise(function(resolve, reject) {

// "Producing Code" (May take some time)

  resolve(value); // when successful
  reject(value);  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) {  code if success  },
  function(value) {  code if error  }
);

.then(onFulfilled, onRejected):
.catch(onRejected):
.finally(onFinally):


.then(success, error) → handles error there
.catch() → handles any unhandled error in the chain
*/

let myPromise = new Promise((resolve, reject) => {
    let flag = false;

    if (flag) {
        resolve("Successfully Completed.");
    } else {
        reject("Completed with error");
    }
});
myPromise.then(
    function (value) {
        console.log(value);
    },
    function (value) {
        console.log(value);
    }
);


function loginUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; // toggle true/false

            if (success) {
                console.log(" User logged in");
                resolve({ id: 1, name: "Amit" });
            } else {
                reject(" Login failed");
            }
        }, 1000);
    });
}

function getRestaurant(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;

            if (success) {
                console.log(" Restaurant found");
                resolve({ id: 101, name: "Pizza Hut" });
            } else {
                reject(" Restaurant not found");
            }
        }, 1000);
    });
}

function selectFood(restaurant) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;

            if (success) {
                console.log(" Food selected");
                resolve({ item: "Pizza", price: 300 });
            } else {
                reject(" Food selection failed");
            }
        }, 1000);
    });
}

function placeOrder(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;

            if (success) {
                console.log(" Order placed");
                resolve({ orderId: 555, ...food });
            } else {
                reject(" Order failed");
            }
        }, 1000);
    });
}

function makePayment(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;

            if (success) {
                console.log(" Payment successful");
                resolve({ status: "paid", order });
            } else {
                reject(" Payment failed");
            }
        }, 1000);
    });
}

loginUser()
    .then(getRestaurant)
    .then(selectFood)
    .then(placeOrder)
    .then(makePayment)
    .then((payment) => {
        console.log(" Order completed!");
        console.log(payment);
    })
    .catch((error) => {
        console.log(error);
    });


