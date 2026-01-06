// Callback function:

// a function given as an argument in another function is called callback function


const loadScript = (para1, para2, callback) => {
    callback(para1, para2);
}


let sum = (arg1, agr2) => {
    console.log("sum of nums: " + (arg1 + agr2));

}

let div = (arg1, agr2) => {
    console.log("div of nums: " + (arg1 / agr2));
}

let multi = (arg1, agr2) => {
    console.log("multi of nums: " + (arg1 * agr2));
}

let sub = (arg1, agr2) => {
    console.log("sub of nums: " + (arg1 - agr2));
}


loadScript(8, 2, sum);
loadScript(8, 2, sub);
loadScript(8, 2, multi);
loadScript(8, 2, div);


// Problem with callback functions: Sometimes we use nested callbacks which make code messy and creates many problems

// Solution: Promises


// Promise: 
// Promise is like a container for future value -- something that will be avaiable later


// promise is a constructor which accepts a arrow function, this arrow function takes to parameters -> resolve and reject
// resolve -> for normal execution
// reject -> for error

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.6) {
        reject("please wait, theres an error!!")
    }
    else {

        setTimeout(() => {
            resolve("You are good to go");
        }, 3000);
    }
})


// this will show the state of a promise
console.log(prom1);


prom1
    // .then() is used for resolve/success
    .then((a) => {
        console.log(a);
    })

    // .catch is used for reject/failure 
    .catch((err) => {
        console.log(err);
    })


/* 
    Each .then() receives the returned value from the previous .then().

    Promise.resolve(10)
  .then(x => x * 2)   // 10 → 20
  .then(x => x + 5)   // 20 → 25
  .then(result => console.log(result));

*/





// let apiProm = new Promise((resolve, reject) => {
//     let random = Math.random();
//     if (random < 0.6) {
//         resolve(fetch("https://jsonplaceholder.typicode.com/posts/1"));
//     }
//     else {
//         reject(fetch("https://jsonplaceholder.typicode.com/invalid-url"));
//     }
// })


// apiProm
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log("Data: " + data);
//     })
//     .catch((error) => {
//         console.log("Error: " + error);
//     })










// fetch("https://httpstat.us/200,500")
//     .then((response) => {
//         if (response.ok == 200) {
//             return response.json()
//         }
//         else {
//             throw new Error("Request failed!!")
//         }
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("API failed!!");
//     })