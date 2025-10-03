/*
    Operators:
        1. Arithmetic Operators: +, -, *, /, %, ++, --, **
        2. Assignment Operators: =, +=, -=, *=, /=, %=
        3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
        4. Logical Operators: &&, ||, !
        5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
        5. String Operators: + (concatenation), += (concatenation assignment)    
*/


// Arithmetic Operators:
let a = 10;
let b = 20;

console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);

console.log(a++);
console.log(++a);

console.log(b--);
console.log(--b);

let c = 5;
let d = 2;
console.log(c ** d); // exponentiation: 5^2 = 25
console.log(10 ** 3); // 10^3 = 1000 (10 ki power 3)





// Assignment Operators:
let x = 10; // assignment
console.log("10 assigned to x, now value of x is: ",x);

x += 5; // x = x + 5
console.log("5 added to x, now value of x is: ",x);

x -= 3; // x = x - 3
console.log("3 subtracted from x, now value of x is: ",x);

x *= 2; // x = x * 2
console.log("x multiplied by 2, now value of x is: ",x);

x /= 4; // x = x / 4
console.log("x divided by 4, now value of x is: ",x);

x %= 4; // x = x % 3
console.log("x modulus 3, now value of x is: ",x);





// Comparison Operators:
let p = 10;
let q = '10';

// == converts vlaue to number and then compares
console.log("p == q: ", p == q); // true (value comparison, type conversion)

// === compares both value and DataType
console.log("p === q: ", p === q); // false (value and type comparison)

let num1 = 5;
let num2 = 10;
console.log("num1 > num2: ", num1 > num2); // false
console.log("num1 < num2: ", num1 < num2); // true

console.log("num1 >= num2: ", num1 >= num2); // false
console.log("num1 <= num2: ", num1 <= num2); // true

console.log("num1 !== num2: ", 5 !== "5"); // true (compares both value and data type)
console.log("num1 != num2: ", 5 !="5"); // false (compares only values)





// Logical Operators:
// Truth table:
//  &&                      ||                       !
//  A   B    A&&B           A    B     A||B          A   !A
//  T   T      T            T    T      T            F    T
//  T   F      F            T    F      T            T    F
//  F   T      F            F    T      T
//  F   F      F            F    F      F

// Logical AND (&&):
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// Logical OR (||):
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// Logical NOT (!):
console.log(!true);  // false
console.log(!false); // true





// Bitwise Operators:
//   & (AND)            | (OR)              ^ (XOR)             ~ (NOT)
//   T   T  =  T        T   T  =  T         T   T  =  F         T   =  F
//   T   F  =  F        T   F  =  T         T   F  =  T         F   =  T
//   F   T  =  F        F   T  =  T         F   T  =  T         
//   F   F  =  F        F   F  =  F         F   F  =  F         

// Bitwise operations are performed on the binary representations of numbers.
// Binary representation of numbers: from 1 to 10:
// 1 = 0001
// 2 = 0010
// 3 = 0011
// 4 = 0100
// 5 = 0101
// 6 = 0110
// 7 = 0111
// 8 = 1000
// 9 = 1001
// 10= 1010

console.log(5 & 3); 
//   0101  <-- 5
// & 0011  <-- 3
// -------- 
//   0001  <-- 1 (result)

console.log(5 | 3);
//   0101  <-- 5
// | 0011  <-- 3
// -------- 
//   0111  <-- 7 (result)

console.log(5 ^ 3);
//   0101  <-- 5
// ^ 0011  <-- 3
// -------- 
//   0110  <-- 6 (result)

console.log(~5);
//   0101  <-- 5
// -------- 
//   1010  <-- -6 (result) (in two's complement form)