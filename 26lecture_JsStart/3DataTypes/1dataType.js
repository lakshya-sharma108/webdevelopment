/*
    What is Data Type?
    A data type is a classification that specifies which type of value a variable can hold and what kind of operations can be performed on it.
*/

// DataTypes:
// Primitive DataTypes:             Non-Primitive DataTypes:
// 1. Number:                       1. Object:
// 2. String:                       2. Array:
// 3. Boolean:                      3. Function:
// 4. Undefined:                    4. Date:
// 5. Null:

// In Js, we don't need to declare the data type of a variable. 
// It automatically detects the data type based on the value assigned to it.

a = 10;
console.log(typeof(a)); // number

b = "Hello";
console.log(typeof(b)); // string

c = true;
console.log(typeof(c)); // boolean -- true/false

d = {name: "Lakshaya", age: 20, isStudent: true};
console.log(typeof(d));       // object -- stores data in key-value pairs
console.log(d);

e = undefined;
console.log(typeof(e)); // undefined -- variable is declared but not assigned any value

f = null;
console.log(typeof(f)); // object -- special keyword that represents "no value" or "empty value"
/*
    Note: In JavaScript, the typeof null returns "object". This is a known quirk of the language and is considered a bug.
    However, null is still used to represent the absence of any object value.
*/