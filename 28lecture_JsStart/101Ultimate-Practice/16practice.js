// try-catch and error handling


// custom error throwing

// let a = prompt("Enter first number")
// let b = prompt("Enter second number")

// if (isNaN(a) || isNaN(b)) {
//     // In case if prompt return a string
//     throw SyntaxError("this fucking thing is not allowed!!");
// } else {
//     let sum = parseInt(a) + parseInt(b);    // parsInt convert string into number

//     // becaue prompt returns value in string so it will append the numbers not do sum
//     console.log("the sum of a and b is: " + sum);
// }





// Error Handling

let c = 5 + 10;
try {
    console.log("the sum is: " + c + x);

} catch (error) {
    console.log("Something is wrong");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

}

// finally clause

finally {
    console.log("Hey, i am finally!!");
}


// the actual use of finally is in functions --
// if you want to run something after return in a function the use finally 


// Example:
function checkFinally() {
    try {
        console.log("hello ji");
        return true;

    } catch (error) {
        console.log("Something is wrong");
        return false;
    }
    finally {
        console.log("the show must go on!");
    }
}

checkFinally();