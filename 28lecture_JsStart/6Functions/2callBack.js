// JavaScript CallBack:

/*
    What is a Callback Function?
    A callback is basically a function passed as an argument to another function, and that other function calls it later (back).
    Hence, call-back.

    In plain words:
    “Hey function B, take this function A, and when you’re done with your work, please call A for me.”

    The function which passed as parameter/argument is called callback function
    The function which accepts another function as callback is called Higher Order Function
*/


// This is the Higher Order Function which accepts callback function
function calculator(a, b, callback){
    console.log(callback)

    callback(a, b);
    console.log("calculation completed!!!");
}

// callback functions
function sqrtMulti(x, y){
    let result = (x**2) * (y**2);
    console.log("Squareroot Multiplication of x and y is : ", result);
}

function sum(a, b){
    let result = a + b;
    console.log("Sum of a and b is : ", result);
}

function devision(a, b){
    let result = a / b;
    console.log("Devision of a and b is : ", result);
}


// Calling Higher Order Function and passing other functions as callback
calculator(5, 6, sqrtMulti);
calculator(5, 6, sum);
calculator(5, 6, devision);



/*
    If we print "console.log(callback)" in Higher Order Function the it will show us the implementation of the
    callback function -- check line no. 18 -- run in broweser

    So if we provide callback functions implementation as arrow function as an argument in Higher Order Function call then--
    -we don't need to define a callback function separately
    -these are called real callback functions
    -these are also called anonymous functions

    check the below example:
*/

console.log("Real callback function----------")

calculator(10, 20, (a, b)=>{
    console.log("the sum of a and b is : ", a+b)
})

