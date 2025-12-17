// String:
// methods to write string:
// 1. "" <-- inside double quote
// 1. '' <-- inside single quote
// 1. `` <-- inside backtrick -- mostly for template literal


console.log("hello ji, this is a string!");

let name = "lakshaya";
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);
console.log(name[7]);
console.log(name[8]);
console.log(name[9]);


let name2 = "shruti";
console.log("length of this string is: " + name2.length);




// template leteral concept:
let myName = "lakshaya";
let friendName = "yogi";

// without template literal
console.log("my name is " + myName + " and my friends name is " + friendName);

// with template literal
console.log(`my name is ${myName} and my friends name is ${friendName}`);

console.log("hello ji " + 'kya haal chal' + ` mitro`);







// String methods:
let str = 'braJEsh';

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(1, 6));
console.log(str.slice(2));
console.log(str.replace("JEsh", "zeel"));

let str2 = 'sharma'
console.log(str.concat(str2, "thala"));


// In js strings are immutable: after all these methods the first string is still remain same
console.log(str);


console.log(str2.includes("sh"));

console.log(str2.indexOf('a', 3));  // specified the start point

console.log(str2.charAt(3));



let str3 = "hello ji, my name is lakshaya awasthi, from btp";
console.log(str3.split(``));
