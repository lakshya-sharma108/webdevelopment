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








// Array Methods:
// --> push, pop, shift, unshift, map, filter, reduce, slice, splice,
// --> reverse, sort, join, indexOf, LastIndexOf, concat

// 1. push --> Add an element at the end of array
let arr1 = [10, 20, 30];
arr1.push("Lakshaya");
console.log(arr1);



// 2. pop --> Remove the last index element of an array
let arr2 = [10, 20, 30, 40];
arr2.pop();
console.log(arr2);



// 3. shift --> Remove element from starting (0th) index
let arr3 = [10, 20, 30];
arr3.shift();
console.log(arr3);



// 4. unshift --> Add element at the first (0th) Index
arr3.unshift("Hello Ji");
console.log(arr3);



// 5. indexOf --> Returns the index of an element's first occurrence
let arr4 = ["luminous", true, 10, true];
console.log(arr4.indexOf(true));
// returns -1 if element not found
console.log(arr4.indexOf(30));
// second parameter in indexOf is to tell from which index it should start searching
console.log(arr4.indexOf(true, 2));



// 6. lastIndexOf --> Returns the last occurrence of an element
let arr5 = [10, 20, true, 10, true, 20];
console.log(arr5.lastIndexOf(true));
console.log(arr5.lastIndexOf(10));



// 7. map --> Calls a function for each element in the array and returns a new array containing the results
let arr6 = [1, 2, 3, 4, 5];
arr6.map((item)=>{
    console.log("Array item : ",item);
});

let newArr = arr6.map((value, index, array)=>{
    console.log("value is : ", value);
    console.log("index is : ", index);
    console.log("array is : ", array);
    return value * 2;
});
console.log("newArr is : ", newArr);



// 8. filter --> Use to filter out elements based on a condition and returns a new array with the elements that satisfy the condition
let arr7 = [10, 15, 20, 25, 30, 35, 40, 8, 10, 3];

// this will filter out all elements greater than 20
let filteredArr = arr7.filter((value)=>{
    return value > 20;
});
console.log("Filtered Array is : ", filteredArr);

// this will filter out all even numbers
let evenArr = arr7.filter((value)=>{
    return value % 2 === 0;
});
console.log("Even Array is : ", evenArr);



// 9. reduce() --> takes an array and "reduces" it to one value using a function you define.
/*
    callbackFunction has 4 parameters:
    (accumulator, currentValue, currentIndex, array)

    Parameter	        Meaning
    accumulator	        stores the result from the previous iteration (the running total)
    currentValue	    the current element being processed
    currentIndex	    (optional) index of the current element
    array	            (optional) the entire array itself

    initialValue:
    It’s the starting value of your accumulator (optional but important).
    If not given → first element of the array is used as the initial value.
*/

let numbers = [10, 20, 30, 40];

let total = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0); // initialValue = 0

console.log(total); // 100
/*
    Step-by-step:
    Step	acc	    curr	Result
    1	    0	    10	    0 + 10 = 10
    2	    10	    20	    10 + 20 = 30
    3	    30	    30	    30 + 30 = 60
    4	    60	    40	    60 + 40 = 100

    Final output → 100
*/

let numbers2 = [2, 12, 8, 22];

let totalRes = numbers2.reduce((acc, curr) => {
  return acc * curr;
}, 1); // initialValue = 1

console.log(totalRes); // 100
/*
    Step-by-step:
    Step	acc	    curr	Result
    1	    1	    2	    1 * 2 = 2
    2	    2	    12	    2 * 12 = 24
    3	    24	    8	    24 * 8 = 192
    4	    192	    22	    192 * 22 = 4224

    Final output → 4224
*/



// 10. slice --> returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) -- takes two parameters: start index and end index
let arr8 = [10, 20, 30, 40, 50, 60, 70];
let slicedArr = arr8.slice(2, 5);
console.log("Sliced Array is: ", slicedArr); // [30, 40, 50]



// 11. splice --> changes the contents of an array by removing or replacing existing elements and/or adding new elements in place -- It modifies the original array.
// takes three parameters: start index, number of elements to remove, elements to add (optional)
let arr9 = [10, 20, 30, 40, 50];
// removing 2 elements from index 1
let removedEle = arr9.splice(1, 2);
console.log("Removed Elements: ", removedEle);
console.log("Array after splice removal: ", arr9); // [10, 40, 50]

// adding elements at index 1 
let arr10 = [10, 40, 50, 60, 70, 80];
arr10.splice(1, 2, 1000, "Lakshaya"); // removes 2 elements from index 1 and adds 1000 and "Lakshaya"
console.log("Array after splice addition: ", arr10); // [10, 1000, "Lakshaya", 60, 70, 80]
// if no elements are to be removed, set second parameter to 0



// 12. reverse --> reverses the order of elements in an array
// It modifies the original array.
let arr11 = [10, 20, 30, 40, 50];
let reversedArr = arr11.reverse();
console.log("Reversed Array: ", arr11); // [50, 40, 30, 20, 10]



// 13. sort --> sorts the elements of an array in place and returns the sorted array
// It modifies the original array.
let arr12 = [32487, 34, 3, 21, 9854, 25, 68, 945849, 49598, 1245];
arr12.sort();
console.log("Sorted Array: ", arr12); 
// Output -- [1245, 21, 25, 3, 32487, 34, 49598, 68, 945849, 9854]
// Note: By default, sort() converts elements to strings and sorts them lexicographically.
// For numerical sorting, provide a compare function.

arr12.sort((a, b) => a - b); // Ascending order
console.log("Numerically Sorted Array: ", arr12); 
// Output -- [3, 21, 25, 34, 68, 1245, 9854, 32487, 49598, 945849]
/*
    How It Works
    sort() compares pairs of elements in the array using your compare function.

    (a, b) => a - b

    This returns:
    a negative number → if a should come before b
    a positive number → if a should come after b

    0 → if they are equal

    So:
    if (a - b < 0) → a comes first
    if (a - b > 0) → b comes first
    if (a - b === 0) → no change in order

    Example comparisons:
    3 - 21 = -18 → 3 before 21
    21 - 25 = -4 → 21 before 25
    25 - 34 = -9 → 25 before 34
    And so on — until all are sorted.......
*/
arr12.sort((a, b) => b - a); // Descending order
console.log("Sorted Array (Descending): ", arr12);



// 14. join --> joins all elements of an array into a string
// It does not modify the original array.
let arr13 = ["Hello", "Ji", "How", "are", "you?"];
let joinedStr = arr13.join("");
console.log("Joined String without space: ", joinedStr); // "HelloJiHowareyou?"

// You can specify any separator you want inside the join() method
let joinedStr1 = arr13.join(" ");
console.log("Joined String with space: ", joinedStr1); // "Hello Ji How are you?"

// You can specify any separator you want inside the join() method
let joinedStr2 = arr13.join(" - ");
console.log("Joined String with '-': ", joinedStr2); // "Hello - Ji - How - are - you?"



// 15. concat --> used to merge two or more arrays
let arr14 = [1, 2, 3];
let arr15 = [4, 5, 6];
let mergedArr = arr14.concat(arr15);
console.log("Merged Array: ", mergedArr); // [1, 2, 3, 4, 5, 6]

let mergedArr2 = arr14.concat("Hello ji", true, [7, 8, 9], arr15);
console.log("Merged Array with different values: ", mergedArr2);