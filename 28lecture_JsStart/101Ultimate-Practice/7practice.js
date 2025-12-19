// Factorial:

/* 
    eg => 5!
          5*4*3*2*1 = 120

          3!
          3*2*1
*/


let num = 5;
let arr = [];
let fact = 1;

while (num >= 1) {
    arr.push(num);
    num--;
}

console.log(arr);

// 1. Using Reduce method
fact = arr.reduce((a, b) => {
    return a * b;
})


// 2. Using for-of loop
// for (const element of arr) {
//     fact *= element;
// }

console.log(fact);

