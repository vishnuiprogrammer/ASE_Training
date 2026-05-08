

// setTimeout()-> executes a function or specified piece of code once the timer expires.
/*
setTimeout(() => {
  console.log("this is the first message");
  
}, 5000);
setTimeout(() => {
  console.log("this is the second message");
}, 3000);
setTimeout(() => {
  console.log("this is the third message");
}, 1000);

*/
// Output:

// this is the third message
// this is the second message
// this is the first message


// const task = setTimeout(() => {
//     console.log("Doing work");
// }, 5000);

// setTimeout(() => {
//     clearTimeout(task);
//     console.log("Task Completed ");
// }, 1000);



// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }


function greetings(name,company){
    console.log(`Hello ${name}, welcome to ${company}`);
}

setTimeout(greetings,2000,"Vishnu","iProgrammer" );