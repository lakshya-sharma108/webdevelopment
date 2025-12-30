// DOM Manipulation in JavaScript:


// Access element by id and storing in myDiv variable
let myDiv = document.getElementById("container");
// Printing myDiv variable which holds elements id
console.log(myDiv);


/*
    1. innerHTML:
    It used to manipulate text content as well as html tags.

    2. innerText:
    It only used to manipulate text content.

    3. textContent:
    textContent used to print/manipulate hidden text
*/


// innerHTML:
myDiv.innerHTML = "Hello ji, kya haal chal!";
// innerText:
myDiv.innerText = "My name is dot dot dot";
// textcontent:
myDiv.textContent = "Na suna usssne tabajjo se fasana dil ka"; 

// These all 3 doing the same work, so what's the difference b/w them?

// Difference:
// innerHTML: It used to manipulate text content as well as html tags.
myDiv.innerHTML = "<input type='text' placeholder='Enter Name'>";

// innerText: It only used to manipulate text content.
myDiv.innerText = "Only used to manipulate text content";

// Difference b/w innerText and textContent

// Created a second element with container2 id and added some text and a sapan tag and added some text in span, provide style "display=none" to span to hide the text, NOW---

let myDiv2 = document.getElementById("container2");

// innerText only print available text
console.log(myDiv2.innerText);

// Whereas textContent prints hidden text as well 
console.log(myDiv2.textContent);