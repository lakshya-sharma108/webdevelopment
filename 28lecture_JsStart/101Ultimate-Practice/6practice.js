// Arrays:

let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);

arr.pop();
console.log(arr);

arr.push("hii");
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("hello");
console.log(arr);

console.log("length of arr: " + arr.length);

delete arr[5];
console.log(arr);


let arr1 = [1, 2, 3, 4];
let arr2 = ["hello", "ji", "kya", "haal"];
let arr3 = [true, false, { name: "lakshaya" }];

console.log(arr1.concat(arr2, arr3));


let unsort = [23, 56, 22, 12, 9, 35, 5, 98, 45];
unsort.sort();
console.log(unsort);

let array = [1, 2, 3, 4, 5, 6];
console.log("deleted nums: " + array.splice(1, 3));
console.log("remaining nums: " + array);



let array1 = [11, 12, 13, 14, 15, 16, 17];

console.log(array1.slice(2, 5));
console.log(array1.slice(4));
console.log(array1);


array1.reverse();
console.log(array1);



let arr4 = [1, 2, 3, 4, 5, 6];
arr4.forEach((value, index, array) => {
    console.log("value: " + value + "\nindex: " + index + "\narray: " + array);
})


let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    console.log(key);
    console.log(obj[key]);

}

for (const index in arr4) {
    console.log("index: " + index);
    console.log("element: " + arr4[index]);

}

for (const element of arr4) {
    console.log("Element of arr4: " + element);
}






// map -> perform some action on a array and returns a new arr

let exArr = [12, 13, 14, 15, 16];

// if we want to create a new array with square of above array then we can simply use map method

let newMapArr = exArr.map(e=>{
    return e**2;
});

console.log(newMapArr);


// filter -> if we want to keep of remove elements using a condition then we have to use this
let newFilterArr = exArr.filter(e=>{
    return e > 13;
});

console.log(newFilterArr);


// reduce ->
let newReduceArr = exArr.reduce((a, b)=>{
    return a + b;
});

console.log(newReduceArr);



// Array.from -> if want to convert a string/obj into array

let obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

console.log(Array.from(obj2));
console.log(Array.from("Lakshaya"));









