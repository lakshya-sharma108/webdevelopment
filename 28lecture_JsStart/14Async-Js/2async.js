// Async Example:

console.log("First Step...");

console.log("Second Step...");

setTimeout(()=>{
    console.log("Third Step...");
}, 3000);

console.log("Fourth Step...");

setTimeout(()=>{
    console.log("Fifth Step...");
}, 0);

console.log("Sixth Step...");




// As we can see in the above asynchronous code steps are executing randomly which can cause problems

// To face this problem JavaScript introduces the concept of "PROMISES" which we will cover in next chapter