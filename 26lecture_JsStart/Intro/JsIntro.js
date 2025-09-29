
// Starting JavaScript -- 26/09/2025

/*
    JavaScript is a high-level, interpreted programming language mainly used to make web pages interactive and dynamic.
    Created in 1995 by Brendan Eich in just 10 days (for Netscape browser).
    It runs directly in the browser (no need to compile).
    Together with HTML (structure) and CSS (style), JS forms the core trio of web development.
    JS is single-threaded and synchronous by default, but it can handle async tasks (like fetching data) using callbacks, promises, and async/await.
    Beyond the browser, thanks to Node.js, JavaScript now also runs on servers, powering full-stack apps.


    An interpreted programming language means:
    You write the code →
    The computer reads it line by line →
    And runs it immediately, without making a separate “compiled” file first.

    JavaScript, Python, PHP → Interpreted.
    You can just write and run. No extra build step needed.

    Java, C, C++ → Compiled.
    First, you must “translate” your code into machine language (binary) using a compiler, then run the result.
*/

/*
    Features of JavaScript:
    1. Lightweight: JS is designed to be lightweight and fast, making it ideal for web applications.
    2. Interpreted Language: JS code is executed line by line by the browser, without the need for prior compilation.
    3. Object-Oriented: JS supports object-oriented programming concepts, allowing developers to create reusable code and modular applications.
    4. Dynamic Typing: JS is dynamically typed, meaning variable types are determined at runtime, providing flexibility in coding.
    5. Event-Driven: JS is designed to handle events, making it suitable for creating interactive web applications.
    6. Cross-Platform: JS can run on various platforms, including web browsers, servers (via Node.js), and mobile devices.
    7. Rich Libraries and Frameworks: JS has a vast ecosystem of libraries and frameworks (like React, Angular, and Vue.js) that simplify development and enhance functionality.
    8. Asynchronous Programming: JS supports asynchronous programming through callbacks, promises, and async/await, allowing for non-blocking
*/

/*
    Where to put JS in HTML?
    1. Inline: Directly within an HTML element using the "onclick" attribute.
    2. Internal: Inside a <script> tag within the <head> or <body> section of the HTML document.
    3. External: In a separate .js file, linked to the HTML document using the <script> tag with the "src" attribute.

    Best Practice: For better organization and maintainability, it's recommended to use external JS files for larger scripts and internal or inline scripts for small, specific functionalities.


    Why putting JS at the end of the body tag is a good practice?
    In simple terms, placing your JavaScript at the end of the body tag ensures that all the HTML content is fully loaded before the script runs. This prevents errors that can occur if the script tries to access elements that haven't been created yet.
*/

/* 
    How to run Js code--
    Method 1:
    1. Create a file with .js extension
    2. write Js code in it
    3. open terminal
    4. write  "node fileName.js" 
       Ex => first.js
    5. hit Enter --> code runs successfully!!

    Method 2:
    1. open file explorer 
    2. create a notepad file with .js extension
    3. write Js code in it
    4. now, open cmd/terminal
    5. go to the folder where .js file is located
    6. write node fileName.js and hit enter
    7. code runs successfully!!
*/


// Printing Statement  --just like java's --> System.out.println();
console.log("Hello World!!")

// alert - pops up an alert box in browser -- Browser functionality, not working in node
// alert("Hello ji, kya haal chaal!!")

// confirm("Are you sure you want to proceed?") // pops up a dialog box with OK and Cancel buttons

// console.log(prompt("Please enter your name:")) // pops up a dialog box that prompts the user for input