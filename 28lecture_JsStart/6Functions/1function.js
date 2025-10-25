// JavaScript Functions:

/* 
    What is function?
    A function is a block of code which is used to perform a specific task, it increases the reusability of code
    and decreases the repeatation of same code

    Hoisting:
    If you are able to access any variable or function before its declaration, this behaviour is called HOISTING
*/

// 1. Function declaration (Without parameters)
function greet() {
    console.log("Good Morning!!")
}

// Function call (without arguments)
greet();



// 2. Function declaration (with parameters)
function sum(a, b){
    let c = a+b;
    console.log("sum of a and b is : ", c)
}

// Function call (with arguments)
sum(5, 10);
sum(35, -47);



// 3. Function Expression -- Assigning function to variable
let multi = function(a, b){
    console.log("The multi of a and b is : ",a*b)
}

multi(6, 3);
console.log(multi)



// 4. Arrow Functions
let arrowFun = ()=>{
    console.log("This is called arrow function")
}

arrowFun();


let devide = (a, b) => {
    console.log("The devision of a and b is : ", a/b)
}

devide(50, 10);

