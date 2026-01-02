// inserting and removing elements using js:

console.log(document.querySelector(".box"));


// 1. innerHTML -- extracts everything

// this extract only text, because there is nothing inside .box div except some text
console.log(document.querySelector(".box").innerHTML);

// this will extract everything including tag and text
console.log(document.querySelector(".container").innerHTML);




// 2. innerText -- extracts only text

// extract only text
console.log(document.querySelector(".box").innerText);

// also extract only text
console.log(document.querySelector(".container").innerText);




// 3. outerHTML -- this will also extract outer content with inner cotent including tags and text
console.log(document.querySelector(".container").outerHTML);



// 4. tagName -- gives you the tag Name
console.log(document.querySelector(".box").tagName);

// 5. nodeName -- gives you the node name
console.log(document.querySelector(".box").nodeName);

// diffrence b/w tagName and nodeName:
// tagName only gives you name of a tag but nodeName gives you every node name including text and comment



// 6. textContent -- same as innerText
console.log(document.querySelector(".container").textContent);


// 7. hidden -- hide the content
console.log(document.querySelector(".box").hidden = true);




// changing the inner HTML 
document.querySelector(".box").innerHTML = "hi, i am lakshaya"
console.log(document.querySelector(".box").innerHTML);



// 8. hasAttribute -- checks if a element containes the particular attribute
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box2").hasAttribute("style"));


// 9. getAttribute -- gives you the particular attribute 
console.log(document.querySelector(".box2").getAttribute("style"));


// 10. setAttribute -- set attribute on a particular element
document.querySelector(".box").hidden = false;
document.querySelector(".box").setAttribute("style", "border: 2px solid red");
console.log(document.querySelector(".box").getAttribute("style"));


// 11. attributes -- give you all the attributes a element holds
console.log(document.querySelector(".box").attributes);