// Events:

let button = document.getElementById("btn");
let box = document.querySelector(".box");


// using Event and EventListner:
button.addEventListener("click", () => {
    box.innerHTML = "Button mat daba chutiye!!!"
})


// In the above example -- the function "addEventListener" is a function which catch a event of perform some operation
// It takes two parameter -- 
// 1. Event -> eg. "click"
// 2. Arrow function -> it defines what action will execute when event trigrred



// There are many types of Events:
// Each type of event contains multiple events:








// Event Bubbling:

// Example:
// document.querySelector(".container2").addEventListener("click", ()=>{
//     window.alert("Container2 was clicked!!!");
// })

// document.querySelector(".childContainer").addEventListener("click", ()=>{
//     window.alert("childContainer was clicked!!!");
// })

// document.querySelector(".child").addEventListener("click", ()=>{
//     window.alert("child box was clicked!!!");
// })



// In the above example if we trigger a child then all the parents of that child will trigger automatically -- this is called Event Bubbling



// Solution:  stopPropagation();
// To stop event bubbling we will take a Event object in arrow function ("e") and inside arrow function we will do -> e.stopPropagation();  this will stop event bubbling

document.querySelector(".container2").addEventListener("click", (e) => {
    e.stopPropagation();
    window.alert("Container2 was clicked!!!");
})

document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation();
    window.alert("childContainer was clicked!!!");
})

document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation();
    window.alert("child box was clicked!!!");
})







// setInterval() -- used for repetation of a task within a spacific time span
// It takes two paramenters:  1. arrow function  2. time in miliseconds

// setInterval(() => {
//     console.log("hello world!!");
//     console.log("hello ji ");
    
// }, 300);


// we can use clearInterval() to remove interval




// setTimeout() -- used to pause the execution for once for a spacific time span and after that it will continue 
// It takes two para:  1. arrow fonction  2. time in milisecond

console.log("hello");
console.log("hii");

setTimeout(() => {
    console.log("whats up");    
}, 1000);

console.log("kya haal");
console.log("kaise ho");


// we can use clearTimeout() to remove Timeout