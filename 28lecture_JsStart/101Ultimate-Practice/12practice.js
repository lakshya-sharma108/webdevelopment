// Events:

let button = document.getElementById("btn");
let box = document.querySelector(".box");


// using Event and EventListner:
button.addEventListener("click", ()=>{
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

document.querySelector(".container2").addEventListener("click", (e)=>{
    e.stopPropagation();
    window.alert("Container2 was clicked!!!");
})

document.querySelector(".childContainer").addEventListener("click", (e)=>{
    e.stopPropagation();
    window.alert("childContainer was clicked!!!");
})

document.querySelector(".child").addEventListener("click", (e)=>{
    e.stopPropagation();
    window.alert("child box was clicked!!!");
})
