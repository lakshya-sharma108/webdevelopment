// Faulty calculator:

function faultyCalc(a, b, operator) {
    let random = Math.random();

    if (random < 0.1) {
        switch (operator) {
            case 1:
                return a + b;
                break;
            case 2:
                return a - b;
                break;
            case 3:
                return a * b;
                break;
            case 4:
                return a / b;
                break;
            case 5:
                return a ** b;
                break;
            case 6:
                return a % b;
                break;

            default:
                console.log('you eneterd a wrong operation');
                break;
        }
    } else {
        switch (operator) {
            case 1:
                return a - b;
                break;
            case 2:
                return a / b;
                break;
            case 3:
                return a + b;
                break;
            case 4:
                return a ** b;
                break;
            case 5:
                return a % b;
                break;
            case 6:
                return a * b;
                break;

            default:
                console.log('you eneterd a wrong operation');
                break;
        }
    }
}


// 1. enter first number
// 2. enter second number
// 3. enter desired operation number
//    1 for +
//    2 for -
//    3 for *
//    4 for /
//    5 for **
//    6 for %

console.log('sum of your numbers is : '+faultyCalc(3, 3, 6));













// second and easy way to create a faulty calculator:
function faulty(a, b, op) {
    let obj = {
        "+": "-",
        "*": "+",
        "-": "/",
        "/": "**",
    }

    let random = Math.random();

    if (random > 0.1) {
        console.log(`the result is ${eval(`${a} ${op} ${b}`)}`);
    }
    else{
        op = obj[op];
        console.log(`the result is ${eval(`${a} ${op} ${b}`)}`);
    }
}

faulty(2, 3, "+");