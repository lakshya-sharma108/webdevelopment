// let a = 5;
// let b = 6;

// let c = a + b;

// console.log(typeof(c));



let strObj = {
    adj: ["crazy", "amazing", "Fire"],
    shop: ["engine", "food", "garments"],
    word: ["bros", "limited", "hub"],
}

let businessName = "";

businessName = businessName.concat(strObj.adj[random(-1, 3)], " ", strObj.shop[random(-1, 3)], " ", strObj.word[random(-1, 3)]);

console.log("Your business Name: \n" + businessName);


function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}