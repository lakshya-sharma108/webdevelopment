// DOM Selectors in JavaScript:

/*
    DOM Selectors:
    document.getElementByclassName         -->   Selects all elements with given class
    document.getElementById                -->   Selects element by ID
    document.getElementByTagName           -->   Selects all elements with given tag
    document.querySelector("selector")     -->   Selects first element matching CSS selector
    document.querySelectorAll("selector")  -->   Selects all elements matching CSS selector
*/


// 1. Class Selector:
// Access element by using class selector and storing in myDiv variable
let myDiv = document.getElementsByClassName("item");
// Consoling myDiv variable
console.log(myDiv);

// In output it shows an collection/array like structure, because multiple elements can have same class and if multiple elements has same class then class selector will select all of them, and because it becomes like an array, will can also use loop on it.

// so we have 10 elements with same class "item"

// Applying CSS using Class selector and Loop on all 10 elements:
for (let i = 0; i < myDiv.length; i++) {
    myDiv[i].style.height = "25px";
    myDiv[i].style.backgroundColor = "teal";
    myDiv[i].style.border = "1px solid black";
    myDiv[i].style.borderRadius = "15px";
}





// 2. Id Selector:
// For id selector check file ./1domIntro.js





// 3. TagName Selector:
// Accessing element using their name more like class selector
let myDiv2 = document.getElementsByTagName("p");
console.log(myDiv2);

// Applying CSS using TagName Selector and Loop on all 5 Paragraph elements:
for (let i = 0; i < myDiv2.length; i++) {
    myDiv2[i].style.fontWeight = "300";
    myDiv2[i].style.backgroundColor = "brown";
    myDiv2[i].style.color = "white";
    myDiv2[i].style.border = "1px solid black";
    myDiv2[i].style.borderRadius = "15px";
    myDiv2[i].style.textAlign = "center";
}





// 4. QuerySelector: 
// Takes class, id or tagname as argument and select only first match no matter if there are many classes, id's or tag's with same name
// Returns the first element that is a descendant of node that matches selectors.
let querySlect = document.querySelector(".item");
console.log(querySlect);

// In above example there are 10 div elements with same class name "item"
// but it only selects first match -- first div





// 5. QuerySelectorAll:
// Takes class, id or tagname as argument and select all the matching results no matter if there are many classes, id's or tag's with same name
let querySelectorAll = document.querySelectorAll(".item");
console.log(querySelectorAll);

// In above example there are 10 div elements with same class name "item"
// and it selects all the matching results -- all div's