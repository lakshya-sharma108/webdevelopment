// Math object in JavaScript:

// Definition:
// Math is a built-in object in JavaScript that provides a collection of mathematical constants, methods, and functions for performing complex math operations — like rounding numbers, generating random values, finding powers, roots, and trigonometric calculations.

// Key point:
// Unlike arrays or objects you create, you don’t need to create an instance of Math.



// 1. random --> generate a random number lies between zero and one.
let random = Math.random();
console.log("Random Number: ", random);


// 2. pow --> raise a number to a power -->  eg:  2's power 3 => 2*2*2 => 8
let power = Math.pow(2, 3);
console.log("Power of 2: ", power);


// 3. sqrt --> Returns the square root of a number
let squireroot = Math.sqrt(16);
console.log("Squireroot of 16 is: ", squireroot);


// 4. round --> Rounds a number to the nearest integer
let num1 = 12.3215;
let num2 = 12.7215;
console.log("Roundoff of num1: ", Math.round(num1));
console.log("Roundoff of num2: ", Math.round(num2));


// 5. floor --> Rounds a number down to the nearest integer
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.9)); // -5


// 6. ceil --> Rounds a number up to the nearest integer
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(-4.9)); // -4



// How to generate a OTP of 6 digits using above methods?
let otp = Math.floor(Math.random()*1000000);
console.log("Your otp is: ", otp);
/*
    Explaination:
    1. let otp = 
    we’re creating a variable named otp that will store whatever value is on the right side of the = sign

    2. Math.random()
    It returns a pseudo-random decimal number between 0 (inclusive) and 1 (exclusive)

    3. Math.random() * 1000000
    This multiplies the random decimal by 1,000,000 (10⁶)
    gets converted into a random number between 0 and 999,999

    4. Math.floor(...)
    Math.floor() is a method that always rounds down to the nearest integer
    All decimals are chopped off, leaving a clean integer (whole number)
*/

