// const data = {
//     from: 1,
//     to: 5
// }

// console.log(...data);



// let age  = 19;
// if (age == 18) {
//     console.log("eligible");
// }
// else{
//     console.log("not eligible");
    
// }



let obj = {
    name: 'Lakshaya',
    age: 21,
    address: 'Btp'
}

let arr = ['abc', 'def', 'uvw', 'xyz']


// for in can iterate over both: object and array
for (const key in obj) {
    const element = obj[key];
    console.log(key,': ', element);
}

for (const index in arr) {
    const element = arr[index];
    console.log(index,': ', element);
}



// for of only iterate over arrays
for (const element of arr) {
    console.log(element);
}


// while loop
let num = 1;
while (num <= 10) {
    console.log('num is : ', num);
    num++;
}



// do-while loop
let num2 = 1;
do {
    console.log(num2);
    num2++;
} while (num2 < 5);