// Async JavaScript:

// JavaScript is a synchronous language but sometimes it behaves like asynchronous

/*
    Synchronous (Sync)
    “Synchronous” means one thing at a time, line by line — like standing in a queue at the railway ticket counter.

    In synchronous JavaScript, each line of code waits for the previous line to finish before running.
    If one task takes time (like downloading data), everything else is paused until it finishes.
*/

// Synchronous Example:
// console.log("Synchronous Example----");
// console.log("1 Start");
// console.log("2 Processing...");
// console.log("3 End");



/*
    Asynchronous (Async)
    “Asynchronous” means don’t wait, just move on — like giving your clothes to the laundry guy and doing other stuff while he works.

    In asynchronous JavaScript, long-running tasks (like API calls, file reading, setTimeout, etc.) are handled in the background.
    Meanwhile, the rest of the code continues to run.
*/

// Ascynchronous Example:
// console.log("\nASynchronous Example----");
// console.log("1 Start");

// setTimeout(() => {
//   console.log("2 Async task done!");
// }, 2000);

// console.log("3 End");





/*
    JS Timer Function:
    1. setTimeOut(callBack-func, time-in-milliSec);
    This is used to take a pause a task for a certain time

    2. setIntervarls(callBack-func, time-in-milliSec);
    This is used to repeat task with a specific time of pause



    3. clearTimeOut();
    Use to clear timing

    4. clearIntervls();
    Used to clear intervals
*/


// 1. setTimeOut:
// console.log("Hello ji, kya haal chal!!");
// setTimeout(()=>{
//     console.log("Burger Khayega???")
// }, 2000);


// 2. setIntervals:
// setInterval(()=>{
//     console.log("Uncle jiii, paani pila dijjiyeee, mera gala sooookh raha hai!!!")
// }, 2000);




// 3. clearTimeOut:
console.log("Hello ji")
let timeOut = setTimeout(()=>{
    console.log("Hello World!!!");
}, 4000);

clearTimeout(timeOut); // after this, timeout function will not work here


// 4. clearInterval:
let interval = setInterval(()=>{
    console.log("Hello World!");
}, 2000);

clearInterval(interval); // after this interval function will not work here



// How to stop Interval function after a specific time of execution?
let interval2 = setInterval(()=>{
    console.log("Achha jiii, esa hai kya!!");
}, 2000);

// this will stop interval after 10 seconds
setTimeout(()=>{
    clearInterval(interval2);
}, 10000);