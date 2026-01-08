// Async and Await:

// waht does async and await do?

// Async and awits are used to wait for a task, which takes time in completig
// with Async and await js waits for a promise to fullfill after that it executes next line


// 1. Async: It makes a function return promise automatically
// 2. Await: It waits for a pormise to fulfill


// Why do we need Async?
// Because await only works inside a async function --
//  or
// async allows you to use await inside a function.


// And -- await pauses the function until the promise finishes



// Example:

async function printData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise is fullfilled!!!")
        }, 1500);
    })
}


async function main() {


    // without async and await js will not wait for time taking task to complete and complete other tasks 
    // console.log("before function task completed!!!");
    // printData();
    // console.log("after function task completed!!!");



    // but with async and await it will wait to complete the other tasks
    console.log("before function task completed!!!");
    let data = await printData();
    console.log(data);
    console.log("after function task completed!!!");
}

main();









// In this e.g. we are using a fake api to fetch data
async function getData() {
    let rowData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await rowData.json();

    console.log(data);
}


async function main2() {
    getData();
}

main2();