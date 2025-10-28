// Promises in JavaScript:

/*
    Definition (In Simple Words):
    A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

    In short:
    A Promise is a container for a future value — something that will be available later


    Why We Need Promises
    Before Promises, JS developers had to rely on callbacks, which often turned into “callback hell” (a messy pyramid of nested functions).
    Promises made async code look cleaner and easier to handle.


    Promise States:
    A Promise has 3 possible states:
    | State         | Meaning                               | Example                  |
    | ------------- | ------------------------------------- | ------------------------ |
    | **Pending**   | The operation is still going on.      | Pizza is being made      |
    | **Fulfilled** | The operation completed successfully. | Pizza delivered          |
    | **Rejected**  | The operation failed.                 | Cheese out of stock      |

*/


// Pormise Syntax:
let pizzaReady = true;

let myPromise = new Promise((resolve, reject) => {

    if (pizzaReady) {
        resolve("Pizza is delivered! ");
    } else {
        reject("Pizza not available ");
    }
});

console.log(myPromise);



