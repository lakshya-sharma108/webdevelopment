/*
    JavaScript Variables:
    Varriables are like containers that store data values.

    We can create a variable using three keywords:
    1. var (old way, function-scoped)
    2. let (modern way, block-scoped)
    3. const (modern way, block-scoped, cannot be reassigned)

    let and const -- introduced in ES6 (ECMAScript 2015)

    Naming Rules for Variables:
    1. Variable names can contain letters, digits, underscores, and dollar signs.
    2. Variable names must begin with a letter, underscore (_), or dollar sign ($). They cannot start with a     digit.
    3. Variable names are case-sensitive (e.g., myVar and myvar are different variables).
    4. Reserved words (like JavaScript keywords) cannot be used as variable names.
    5. Use meaningful names that describe the data the variable holds.
    6. Use camelCase for multi-word variable names (e.g., myVariableName).

*/

// var FirstName = "Lakshaya";
// console.log(FirstName);

// let LastName = "Sharma";
// console.log(LastName);

// const MiddleName = "Awasthi";
// console.log(MiddleName);





// var -- old way of declaring variables -- redeclaration and re-assignment allowed

// Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined.
// This means you can use the variable before its declaration without getting an error, but its value will be undefined until the line where it is assigned a value is executed.

// Hoisting Example:
// console.log(num1);  // Output: undefined
// var num1 = 10;
// console.log(num1);  // Output: 10

// Re-assignment and Re-declaration Example:
var myName = "Lakshaya";
console.log(myName);
myName = "Lakshaya Sharma";   // re-assignment allowed
console.log(myName);
var myName = "Lakshaya Sharma Awasthi"; // redeclaration allowed
console.log(myName);





// let -- modern way of declaring variables -- re-assignment allowed but redeclaration not allowed

// Hoisting: Variables declared with let are hoisted to the top of their block scope but are not initialized. 
// This means you cannot use the variable before its declaration; doing so will result in a ReferenceError.

// Hoisting Example:
// console.log(num2);  // Error: Cannot access 'num2' before initialization
// let num2 = 20;
// console.log(num2);  // Output: 20

// Re-assignment and Re-declaration Example:
let num3 = 30;
console.log(num3);  // Output: 30
num3 = 40;          // re-assignment allowed
console.log(num3);  // Output: 40
// let num3 = 50;    // Error: Identifier 'num3' has already been declared
// console.log(num3);




// const -- modern way of declaring variables -- neither re-assignment nor redeclaration allowed

// Hoisting: Variables declared with const are hoisted to the top of their block scope but are not initialized. 
// This means you cannot use the variable before its declaration; doing so will result in a ReferenceError.

// Hoisting Example:
// console.log(num4);  // Error: Cannot access 'num4' before initialization
// const num4 = 50;
// console.log(num4);  // Output: 50

// Re-assignment and Re-declaration Example:
const num5 = 60;
console.log(num5);  // Output: 60
// num5 = 70;        // Error: Assignment to constant variable.
// console.log(num5);
// const num5 = 80;  // Error: Identifier 'num5' has already been declared
// console.log(num5);



// Note: For objects and arrays declared with const, you can modify the contents (like adding or changing properties/elements), but you cannot reassign the variable to a completely new object or array.
const myArray = [1, 2, 3];
console.log(myArray);
myArray.push(4);  // Modifying the contents is allowed
console.log(myArray); // Output: [1, 2, 3, 4]
// myArray = [5, 6, 7]; // Error: Assignment to constant variable.
// console.log(myArray);

const myObject = { name: "Lakshaya", age: 20 };
console.log(myObject);
myObject.age = 21;
console.log(myObject); // Output: { name: "Lakshaya", age: 21 }
// myObject = { name: "Sharma", age: 22 }; // Error: Assignment to constant variable.
// console.log(myObject);




/*

Scope of Variables:
Scope in JavaScript means “where in the code a variable can be accessed or used.”

1. Global Scope: --> var
Variables declared outside any function or block have global scope and can be accessed from anywhere in the code.

2. Local/Functional Scope: --> var -- in case of function "var" behaves like "let" and "const"
Variables declared within a function are local to that function and cannot be accessed from outside the function.

3. Block Scope: --> let, const
Variables declared with let or const inside a block (e.g., inside curly braces {}) are limited to that block and cannot be accessed from outside the block.
*/


// Global Scope Example:
var globalVar = "I am a global variable";
console.log(globalVar); // Accessible anywhere

{
    // Accessing global variable inside a block
    console.log(globalVar);

    {
        // Accessing global variable inside a nested block
        console.log(globalVar);
    }
}





// Block Scope Example:
// let:
{
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Accessible inside the block

    {
        console.log(blockVar); // Accessible inside the nested block
    }
}
// console.log(blockVar); // Not accessible outside the block (Error)


// const:
// const blockConst = "I am a block-scoped const variable";
// console.log(blockConst); // Accessible inside the block

{
    const blockConst = "I am a block-scoped const variable";
    console.log(blockConst); // Accessible inside the nested block
    {
        console.log(blockConst); // Accessible inside the nested block
    }
}
// console.log(blockConst); // Not accessible outside the block (Error)





// Local/Functional Scope Example:
// console.log(localVar); // Not accessible outside the function (Error)
// In case of function "var" avoides hoisting issue
function myFunction() {
    var localVar = "I am a local/functional variable";
    // console.log(localVar);
}
// console.log(localVar);  // Not accessible outside the function (Error)

myFunction(); // Calling the function to see the output

// console.log(localVar);  // Not accessible outside the function (Error)