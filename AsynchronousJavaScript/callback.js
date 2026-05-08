// function sayHello(name, callback) {
//     setTimeout(() => {
//         console.log(`Hello ${name}, How are you ?`);
//         callback();
//     }, 2000);
// }

// function sayBye() {
//     setTimeout(() => {
//         console.log("Bye, Nice to meet you !");
//     },1000);
// }

// function main() {
//     sayHello("Vishnu", sayBye);
// }
// main();



// function downloadFile(url, callback) {
//     console.log("Downloading from " + url);

//     setTimeout(function () {
//         console.log("Download complete");
//         callback(url);
//     }, 2000);
// }

// function processFile(url) {
//     console.log(`Processing ${url} file...`);
// }

// downloadFile("file.txt", processFile);

// function loginUser(username, password, callback) {
//     console.log("Checking credentials...");

//     setTimeout(function () {
//         let isValid = true; // change to true/false 
//         if (isValid) {
//             callback(null, {
//                 username: username,
//                 message: "Login successful"
//             });
//         } else {
//             callback("Invalid username or password", null);
//         }
//     }, 2000);
// }

// // Calling function
// loginUser("Amit", "1234", function (error, data) {
//     if (error) {
//         console.log(" Error:", error);
//         return;
//     }

//     console.log(" Success:", data);
// });


function loginUser(callback) {
    setTimeout(() => {
        let success = true; // change to false 
        if (success) {
            console.log(" User logged in");
            callback(null, { id: 1, name: "Amit" });
        } else {
            callback(" Login failed", null);
        }
    }, 1000);
}

function getRestaurant(user, callback) {
    setTimeout(() => {
        let success = true;

        if (success) {
            console.log(" Restaurant found");
            callback(null, { id: 101, name: "Pizza Hut" });
        } else {
            callback(" Restaurant not found", null);
        }
    }, 1000);
}

function selectFood(restaurant, callback) {
    setTimeout(() => {
        let success = true;

        if (success) {
            console.log(" Food selected");
            callback(null, { item: "Pizza", price: 300 });
        } else {
            callback(" Food selection failed", null);
        }
    }, 1000);
}

function placeOrder(food, callback) {
    setTimeout(() => {
        let success = false;

        if (success) {
            console.log(" Order placed");
            callback(null, { orderId: 555, ...food });
        } else {
            callback(" Order failed", null);
        }
    }, 1000);
}

function makePayment(order, callback) {
    setTimeout(() => {
        let success = true;

        if (success) {
            console.log(" Payment successful");
            callback(null, { status: "paid", order });
        } else {
            callback(" Payment failed", null);
        }
    }, 1000);
}

loginUser(function (err, user) {

    getRestaurant(user, function (err, restaurant) {

        selectFood(restaurant, function (err, food) {

            placeOrder(food, function (err, order) {

                makePayment(order, function (err, payment) {

                    console.log(" Order completed!");
                });
            });
        });
    });
});