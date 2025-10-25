// Strign Mehtods in JavaScript:
// length, charAt, indexOf, lastIndexOf, toUpperCase, toLowerCase, includes, startsWith, endsWith, slice, substring, split, concat, replace, trim


// We have three ways to create a string---
// 1. Using Double Quotes
let str1 = "Hello ji, kya haal chaal!";
console.log(str1);
// 2. Using Single Quotes
let str2 = 'Hello Dosto!';
console.log(str2);
// 3. Using Backticks (Template Literals)
let str3 = `Hello Friends!`;
console.log(str3);



// Some Important String Methods:
// 1. length -- It returns the length of the string
console.log("Length of str1:", str1.length);


// 2. charAt(index) -- It returns the character at the specified index
console.log("Character at index 7 in str1:", str1.charAt(7));
// we can also access the the characters of string using bracket notation
console.log(str1[10]);


// 3. indexOf(substring) -- It returns the index of the first occurrence of the specified substring
console.log("Index of 'kya' in str1:", str1.indexOf('kya'));
console.log("Index of 'o' in str1:", str1.indexOf('o'));
// by default it starts searching from index 0, but we can also provide a second argument to specify the starting index
console.log("Index of 'o' in str1 starting from index 5:", str1.indexOf('o', 5));


// 4. lastIndexOf(substring) -- It returns the index of the last occurrence of the specified substring
console.log("Last Index of 'l' in str2:", str2.lastIndexOf('l'));
console.log("Last Index of 'a' in str1:", str1.lastIndexOf('a'));


// 5. include -- It checks if string contains given character/string
let str4 = 'bhupendra jogi';
console.log("is str4 contains jogi: ", str4.includes("jogi"));
console.log("is str4 contains p: ", str4.includes("p"));


// 6. slice(start, end) -- It returns the sliced string b/w start and end index
// It not include last index
let str5 = "pkmkbforever";
let slicedStr = str5.slice(2, 8);
console.log("Sliced string is: ", slicedStr);
// slice also support negative index and starts counting from last
let slicedStr2 = str5.slice(2, -7);
console.log("Sliced string using negative index: ", slicedStr2);


// 7. subString(start, end) -- Exact same as slice but did not support negative index
let subStr = str5.substring(2, 8);
console.log("SubString: ", subStr);


// 8. split("seperator") -- split a string using a seperator and return as array
let str6 = "sdf,lks,jre,dfk,jfi,eds,jfk,e d,fjd,sjf,wed,saf,adj,edk,fjm";
console.log(str6.split("")); // blank seperator means it will seperate each character
console.log(str6.split(" ")); // it will seperate string from where it find any space
console.log(str6.split("e")); // it will seperate string from where it find any e character
console.log(str6.split(",")); // it will seperate string from where it find any , comma


// 9. startsWith("char") -- Returns true if string starts with provided character/substring
let str7 = 'lakshaya';
console.log(str7.startsWith("lak"));
console.log(str7.startsWith("yz"));


// 10. endsWith("char") -- Returns true if string ends with provided character/substring
let str8 = 'Awasthi';
console.log(str8.endsWith("thi"));
console.log(str8.endsWith("jp"));


// 11. toUpperCase() -- Make all the chars of an string in UPPERCASE
console.log(str7.toUpperCase());


// 12. toLowerCase() -- Make all the chars of an string in lowercase
console.log(str8.toLocaleLowerCase());
