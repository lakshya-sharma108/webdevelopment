// Document Object Model (DOM) in JavaScript:

/*
    Simple Definition:
    DOM (Document Object Model) is a programming interface that allows JavaScript to interact with, read, and modify the content, structure, and style of a webpage.

    Think of it like this:
    When your browser loads an HTML page, it translates that HTML code into a tree-like structure — that’s the DOM Tree.

    Each HTML tag (like <h1>, <p>, <div>, etc.) becomes a node (or object) in this tree.
    JavaScript can use this tree to find, add, remove, or change anything on the page — text, images, buttons, or even CSS.


    The DOM Tree of Objects:-
                                    DOUCMENT
                                       |
                                  ROOT-ELEMENT
                                     <HTML>
                                       |
         +-----------------------------+------------------------------+
         |                                                            |
      ELEMENT                                                      ELEMENT
      <head>                                                        <body>
        |                                                             |
     ELEMENT                                          +---------------+-----------+ 
     <title>                                          |                           |
        |                          ATTRIBUTE  ___  ELEMENT                     ELEMENT
      TEXT                          "herf"           <a>                         <h1>
    "my title"                                        |                           |
                                                     TEXT                       TEXT
                                                   "my link"                 "myheader


    
    DOM in Real Life Terms:
    Imagine your HTML file as a blueprint of a house —
    and the DOM is the actual house built in memory, where you can walk in (using JS), open a door (access an element), repaint the wall (change CSS), or add furniture (insert new elements).


    Accessing the DOM in JavaScript:
    You use the "document" object — it’s the root of the DOM tree.


    DOM Manipulation -- Manupulate html from js
    document.getElementByclassName         -->   Selects all elements with given class
    document.getElementById                -->   Selects element by ID
    document.getElementByTagName           -->   Selects all elements with given tag
    document.querySelector("selector")     -->   Selects first element matching CSS selector
    document.querySelectorAll("selector")  -->   Selects all elements matching CSS selector

*/

// Example:
let myDiv = document.getElementById("container");
console.log(myDiv);

// this will print elements id
console.log(myDiv.id);

// this will print elements class
console.log(myDiv.className);

// Accessing the style/css of element
console.log(myDiv.style);




// changing the id of element -- not in original file
// myDiv.id = "container-box";
// console.log(myDiv.id);

// changing the class of element -- not in original file
// myDiv.className = "box-class";
// console.log(myDiv.className);




// changing the css of element
myDiv.style.width = "500px";
myDiv.style.backgroundColor = "red";


// Getting a attribute of element
// syntax:  getAttribute("attribute_name")
console.log(myDiv.getAttribute("class"));
console.log(myDiv.getAttribute("id"));

// Setting attributes of element
// syntax:  setAttribute("style", "attribute1_name : value; attribute2_name : value; ...")
myDiv.setAttribute("style", "width : 250px; background-color : teal")
