/*
    What is Data Type?
    A data type is a classification that specifies which type of value a variable can hold and what kind of operations can be performed on it.
*/

// DataTypes:
// Primitive DataTypes:             Non-Primitive/Reference DataTypes:
// 1. Number:                       1. Array:
// 2. String:                       2. Object:
// 3. Boolean:                      3. Date:
// 4. Undefined:
// 5. Null:
// 6. bigInt:
// 7. Symbol:

// In Js, we don't need to declare the data type of a variable. 
// It automatically detects the data type based on the value assigned to it.



// Primitives:

let a = 10;
console.log(a); // 10
console.log(typeof a); // number

a = "Hello";
console.log(a); 
console.log(typeof a); // string

a = true;
console.log(a); 
console.log(typeof a); // boolean -- true/false

let b;
console.log(b); 
console.log(typeof b); // undefined -- variable is declared but not assigned any value

b = null;
console.log(b);
console.log(typeof b); // object -- special keyword that represents "no value" or "empty value"
// Note: In JavaScript, the typeof null returns "object". This is a known quirk of the language and is considered a bug.
//       However, null is still used to represent the absence of any object value.


// Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
// Example:
let c = 1234567890123456789012345678901234567890;
c = c+5; // precision lost
console.log(c);

c = 1234567890123456789012345678901234567890n; // BigInt literal -- just add 'n' at the end of the number
c = c + 5n; // BigInt arithmetic
console.log(c);
console.log(typeof c); // bigint -- used for very large integers


// d = {name: "Lakshaya", age: 20, isStudent: true};
// console.log(typeof(d));       // object -- stores data in key-value pairs
// console.log(d);





// Non-Primitives:

// Array:
// An array in JavaScript is a special type of object used to store ordered collections of elements.
// Each element has a numeric index (starting from 0).
// Arrays can hold different data types in a single collection (numbers, strings, objects, functions, even other arrays).

let firstarray = [ 8, "Lakshaya", true, null, undefined, [5, "Awasthi", false], {city: "BTP", country: "India"} ];
//      Index: =>  0      1         2    3        4              5                             6

// Accessing elements in an array using their index:
console.log(firstarray[0]);
console.log(firstarray[1]);
console.log(firstarray[2]);
console.log(firstarray[3]);
console.log(firstarray[4]);
console.log(firstarray[5]);
console.log(firstarray[6]);

console.log(typeof firstarray); // will print whole array as it is an object
console.log(firstarray.length); // 7 -- gives the number of elements in the array

let arr = ["apple", "banana", "cherry"];
console.log(arr);
console.log(arr.length);
console.log(typeof arr);

let arr2 = [];
console.log(arr2);
console.log(arr2.length);
arr2[0] = "Rohit Sharma";
arr2[5] = "Virat Kohli";
arr2[3] = " ";
console.log(arr2.length);
console.log(arr2);


// Object:
// An object in JavaScript is a collection of key-value pairs, where each key (also called a property) is a string (or Symbol) and is used to access the corresponding value.
// The value can be of any data type, including other objects or functions.

let myObject = { 
            name: "Lakshaya", 
            age: 20, 
            isStudent: true, 
            address: { city: "BTP", country: "India" }, 
            favNum: [8, 10] 
};

console.log(myObject) // prints the whole object
console.log(myObject.address); // prints the nested object
console.log(myObject.address.city) // prints the value of city inside the nested object
console.log(myObject.favNum); // prints the array inside the object
console.log(myObject.favNum[0]); // prints the first element of the array inside the object

// Accessing object values by their keys
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.isStudent);


// Date:
// The Date object in JavaScript is used to work with dates and times. It provides methods to create, manipulate, and format dates.
// Internally, a Date object stores time as milliseconds since January 1, 1970 UTC (called the Unix Epoch).

const date = new Date();
console.log(date);
console.log(typeof date);

// Commonly used Date methods:
console.log(date.toString()); // converts date to a human-readable string format
console.log(date.toDateString()); // converts date to a more concise human-readable string format
console.log(date.toISOString()); // converts date to ISO 8601 format (useful for data exchange)
console.log(date.toLocaleString()); // converts date to a locale-specific string format

console.log(date.getFullYear()); // gets the 4-digit year
console.log(date.getMonth()); // gets the month (0-11, where 0 = January and 11 = December)
console.log(date.getDate()); // gets the day of the month (1-31)
console.log(date.getDay()); // gets the day of the week (0-6, where 0 = Sunday and 6 = Saturday)

console.log(date.getHours()); // gets the hour (0-23)
console.log(date.getMinutes()); // gets the minutes (0-59)
console.log(date.getSeconds()); // gets the seconds (0-59)
console.log(date.getMilliseconds()); // gets the milliseconds (0-999)

// Current timestamp in milliseconds since January 1, 1970
console.log(Date.now());
// Copy the current timestamp and paste it in https://www.epochconverter.com/ to see the human-readable date and time.



// Date is an object, not a primitive.
// Internally stores ms since 1970 UTC.
// Provides methods for getting, setting, formatting, comparing.
// Be careful with time zones, month indexing, and parsing strings.
