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


// 12. removeAttribute -- remove a particular attribute
document.querySelector(".box").removeAttribute("style");
console.log(document.querySelector(".box").getAttribute("style"));


// 13. designMode -- allow to edit any webpage on internet
// document.designMode = "on";


// 14. dataSet -- gives you the data inside a particular element
console.log(document.querySelector(".box3").dataset);













// Insertion Methods:

let div = document.createElement("div");
div.innerHTML = "<b>This element is inserted using JS</b>";
div.setAttribute("class", "created");

// 1. append -- this will insert the element at the end, inside the node
document.querySelector(".container").append(div);

// 2. after -- this will insert the element just after node ends
document.querySelector(".container").after(div);

// 3. prepend -- this will insert the element in the begning, inside the node
document.querySelector(".container").prepend(div);

// 4. before -- this will insert the element just before node starts
document.querySelector(".container").before(div);




// insertAdjacentHTML --
let ele = document.querySelector(".box3");

// 1. afterbegin -- insert just after node starts
ele.insertAdjacentHTML("afterbegin", "<i>i am adjecent element just after node begin</i>");

// 2. beforebegin -- insert just before node starts
ele.insertAdjacentHTML("beforebegin", "<i>i am adjecent element just before node begin</i>");

// 3. beforeend -- insert just before node ends
ele.insertAdjacentHTML("beforeend", "<i>i am adjecent element just before node ends</i>");

// 4. afterend -- insert just after node ends
ele.insertAdjacentHTML("afterend", "<i>i am adjecent element just after node ends</i>");


// remove -- remove elements
let khatam = document.querySelector(".box4");
khatam.remove();




// className and classList:

console.log(document.querySelector(".dabba").classList);
console.log(document.querySelector(".dabba").className);

document.querySelector(".dabba").classList.remove("bg-green")
document.querySelector(".dabba").classList.add("ek-dabba")

console.log(document.querySelector(".dabba").classList);


// toggle - toggle is just like not operator- 
// if true make it false 
// if false make it true

// if class not exists if will add and if class exists it will remove
document.querySelector(".dabba").classList.toggle("red");

console.log(document.querySelector(".dabba").classList);




