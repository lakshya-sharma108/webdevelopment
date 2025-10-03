// Control-Flows:
// Control flow in JavaScript determines the order in which statements are executed in a program.
// By default, JS runs top to bottom, left to right.
// But with control flow tools (like conditionals, loops, exceptions), we can bend that flow.


// 1. Conditional Statements (Decision Making)

// if statement: Executes a block only if the condition is true.
let age = 20;
if(age > 18){
    console.log("Age is greater then 18");
}


// if...else: if block executes if condition is true, otherwise else block will execute
let num1 = 15;
if(num1 < 18) {
    console.log("Number is less then 18");
} else {
    console.log("Number is greater then 18");
}


// if...else if...else: Multiple condition statements
let marks = 50;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail ho gaya Bhadwe!!");
}


// switch statement:
// Used when you have many conditions for one variable.
// Uses strict comparison (===).
// break prevents fall-through.
let day = 8;
switch (day) {
  case 0: 
    console.log("Sunday"); 
    break;
  case 1: 
    console.log("Monday"); 
    break;
  case 2: 
    console.log("Tuesday"); 
    break;
  case 3: 
    console.log("Wednesday"); 
    break;
  case 4: 
    console.log("Thursday"); 
    break;
  case 5: 
    console.log("Friday"); 
    break;
  case 6: 
    console.log("Saturday"); 
    break;
  default: 
    console.log("Invalid day");
}


// Ternary Operator (?:)
// Shortcut for simple if...else.
// Syntax: (condition) ? "stmt for true" : "stmt for false";
let age2 = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);





// Loop's:

// 1. For-loop:
let value = 10;
for (let i = 0; i <= value; i++) {
    console.log("Values: ", i)
}

let arr = ["Lakshaya", 8, true, null, undefined, {pin: "321303"}];
for (let index = 0; index < arr.length; index++) {
    console.log("value of array index",index, " => ", arr[index])
}



// 2. while loop:
// Repeats as long as condition is true.
let count = 0;
while (count <= 8) {
    console.log("I am the king of my kingdom")
    count++;
}



// 3. do...while loop:
// Runs at least once, then checks condition.
let i = 0;
do {
  console.log("Neeche jaake check karunga condition, if true hogi to hi aage badhunga");
  i++;
} while (i > 5);


// CAN'T UNDERSTAND!!!
// 4. for...in (objects):
// Iterates over keys (property names) of an object.
let person = { name: "Buddy", age: 21, address: "Btp" };
for (let key in person) {
  console.log(key, person[key]);
}
