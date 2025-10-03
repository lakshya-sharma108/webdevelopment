// We can declare a variable without assignigng any value to it, but variable must be declared using var or let only.
// The value of such variable will be 'undefined' by default.
var nameVar;
console.log(nameVar);

let nameLet;
console.log(nameLet);

// const nameConst;  // Error: Missing initializer in const declaration
// console.log(nameConst);




let myName = "Lakshaya";
console.log(myName);
// console.log(myname); // Js is case-sensitive when it comes to variable names.




// Why should we avoid using var in modern JavaScript?
// We avoid using var in modern JavaScript because it has function scope (not block scope) and supports hoisting, which can create bugs that are hard to track.
// Instead, we use let (block-scoped, reassignable) or const (block-scoped, not reassignable) because they’re safer and more predictable.
if (true) {
  var x = 10;  // function scoped
  let y = 20;  // block scoped
}
console.log(x); // 10 (leaks outside block)
// console.log(y); // ReferenceError




// Trying to redeclare a variable with var, let and const in the same scope
{
    var a = 1;
    console.log(a); // 1
    var a = 5;
    console.log(a); // 5


    let b = 2;
    console.log(b); // 2
    // let b = 4; // let cannot be redeclared in the same scope
    // console.log(b); // Error: Identifier 'b' has already been declared


    const c = 3;
    console.log(c); // 3
    // const c = 6; // const cannot be redeclared in the same scope
    // console.log(c); // Error: Identifier 'c' has already been declared
}




// Temporal Dead Zone (TDZ):
// The Temporal Dead Zone is the time between when a variable is hoisted (reserved in memory) and when it is actually initialized.
// During this time, if you try to access the variable, you’ll get a ReferenceError.
// It happens with let and const, but not with var (that’s one reason let/const are safer).

// console.log(MyName); // TDZ: starts here for MyName -- Error: Cannot access 'MyName' before initialization
let MyName = "Lakshaya";
console.log(MyName); // TDZ: ends here for MyName




// Declaring a variable without var, let or const makes it a global variable (not recommended)
// It bahaves like var, but it’s created in the global scope
console.log(Address); // Output: Bharatpur



// Doubt: Why const allows modification of object properties?
const obj = {name: "Buddy"};
obj.name = "Papa Ji";
console.log(obj.name);

