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


// 
