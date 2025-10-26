// Template Literals in JavaScript:
/*
    Definition:
    Template literals are string literals that allow you to:
    1. Embed variables and expressions directly inside a string
    2. Write multi-line strings easily
    3. Make your code more readable and elegant

    They are written using backticks ( ` ` ), not single or double quotes.
*/


// Syntax:  `string text ${expression} string text`


// Example1:
let firstName = "Lakshaya";
let lastName = "Awasthi";

let fullName = `My full name is ${firstName} ${lastName}, I am from XYZ`;
console.log(fullName);

// Can't do this using double quotes
let fullName2 = "My full name is ${firstName} ${lastName}";
console.log(fullName2);

// Can't do this using single quote either
let fullName3 = 'My full name is ${firstName} ${lastName}';
console.log(fullName3);


// Example2:
let myName = "Lakshaya";
console.log(`Hello, ${myName}!`);



/*
    ${...} – The Expression Placeholder

    Whatever you put inside ${} will be evaluated and inserted into the string automatically.
    ->You can insert:
    ->Variables
    ->Mathematical expressions
    ->Function calls
    ->Any JavaScript expression
*/




// Function Call inside Template Literal
function getGreeting(name) {
  return `Hello, ${name.toUpperCase()}, Kya haal chaal!`;
}

let msg = `Message: ${getGreeting("buddy")}`;
console.log(msg);



// Using Expressions Inside Template Literal
let price = 1200;
let discount = 0.15;

let message = `After ${discount * 100}% discount, the price is ₹${price - price * discount}.`;
console.log(message);
