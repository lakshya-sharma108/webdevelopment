// Advance JS:


// 1. IEFE (immediately invoke function expression):
// This is a js function that runs as soon as it defines

// Example:
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 2000);
    })
}

// awaiting the sleep function without a async function will not work
// let a = await sleep();
// let b = await sleep();


// IEFE:
// (async function main(){
//     let a = await sleep();
//     console.log(a);

//     let b = await sleep();
//     console.log(b);
// })()







// Destructuring
(async function main(){
    // wrong
    // let a, b = [5, 6]

    // right
    let [a, b] = [5, 4]
    console.log(a, b);


    // first variables get values accordingly and remainging values will store in a rest array
    let [x, y, ...rest] = [2, 4, 6, 8, 10, 12]
    console.log(x, y, rest);
    



    // Destructuring
    let obj = {
        p: 31,
        q: 32,
        r: 33,
        s: 34,
    }

    let {p, q, r} = obj;
    console.log(p, q, r);
    






    // spread syntax:
    function sum(u, v, w) {
        return u+v+w;
    }

    let arr = [10, 20, 30];

    // both are same
    console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr));
    
    

})()