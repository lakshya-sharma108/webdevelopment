// Object Methods in JavaScript:
// keys, values, entries, freez, seal


let obj = {
    firstName : "Lakshaya",
    lastName : "Awasthi",
    department : "CS"
}

// NOTE: We have to use object methods using "Object.methodName" where Object is a constructor


// 1. keys -- it will return object keys in the form of array
let keyResult = Object.keys(obj);
console.log(keyResult);


// 2. values -- it will return object values in the form of array
let valueResult = Object.values(obj);
console.log(valueResult);


// 3. entries -- it will return key-value pair of an object, each in diffrent array
let entryResult = Object.entries(obj);
console.log(entryResult);


// 4. freez -- It does not allow to ADD or UPDATE object
// before freez:
obj.gender = "male";  // Add
obj.department = "FSD";  // Update
console.log(obj);

//Object.freeze(obj);

// after freez:
//obj.address = "Bharatpur";  // Add
//obj.gender = "female";  // Update


// 5. seal -- It allows to update existing keys but doesn't allow to add new one
Object.seal(obj);

obj.address = "Bharatpur";
obj.lastName = "Sharma";

console.log(obj)
