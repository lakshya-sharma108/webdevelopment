// functions:

function greet(name) {
    console.log('hey ' + name + ' you are a good person!');
    console.log('hey ' + name + ' you are a inspiration!');
    console.log('hey ' + name + ' you are a multi-telended!');
}

greet('lakshaya');
greet('shruti');


// here c ia a parameter with a default value and it can be override
function sum(a, b, c=5) {
    // console.log(a + b);
    return a + b + c;
}

console.log(sum(5, 3, 2));


let result = sum(4, 6);
console.log('sum of your numbers is: '+ result);



// arrow function:
let arrowFunc = (x)=>{
    console.log('hii, i am a arrow function : '+ x);
    
}

arrowFunc(22);
arrowFunc(88);
arrowFunc(8);