// Promises Handling in JavaScript:

let data = [{
    productName : "Iphone",
    price : 100000,
    description : "This is Iphone series of Apple",
    category : "Smartphone"
}];

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
        });
    }, 5000);
}

const result = fetchData();
// console.log(result);


// We use .then() and .catch() methods to handle the result.
// 1. The Flow (Step by Step):
// 2. Promise starts in pending state.
// 3. If everything goes well → resolve() is called → state becomes fulfilled.
// 4. If something goes wrong → reject() is called → state becomes rejected.
// 5. .then() runs when resolved.
// 6. .catch() runs when rejected.


result
.then((data)=>{
    console.log(data);
    alert("Product data fetched");
})

.catch((err)=>{
    console.log(data);
    alert(err);
});