// Dom:

// document.title = "hello ji";

// console.log(document.title);
// console.log(document.body);


// // This will add a inline css:
// document.body.style.backgroundColor = "yellow";










console.log("Hello world!!");

// Accessing child nodes:

// NOTE: Js includes white spaces as text node.

// this will get me whole ducument body:
console.log(document.body);

// this will get me all child nodes inside body:
console.log(document.body.childNodes);

// accessing a particular node using index
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);



// accessing child node - container div
console.log(document.body.childNodes[3]);

// accessing child nodes of div container
console.log(document.body.childNodes[3].ChildNodes);




let cont = document.body.childNodes[3];

// because of white space the first child in div is text
console.log(cont.firstChild);

// this will ignore space so we will not get text as a child
// accessing first-last child nodes
console.log(cont.firstElementChild);
console.log(cont.lastElementChild);

// applying css on child nodes:
cont.firstElementChild.style.backgroundColor = "Yellow";
cont.lastElementChild.style.backgroundColor = "teal";



// accessing parent node
console.log(cont.firstElementChild.parentElement);

// applying css on parent child
cont.firstElementChild.parentElement.style.display = "flex";



// accessing all child nodes 
console.log(cont.children);
// or we can also do this
console.log(document.body.firstElementChild.children);




// applying css on all child nodes
// using loop because cont.children returns the array of childs
// for (const key in cont.children) {

//     cont.children[key].style.color = "black";
//     cont.children[key].style.backgroundColor = "yellow";
//     cont.children[key].style.textAlign = "center";
// }



// accessing sibling nodes
console.log(cont.children[3].nextElementSibling);
console.log(cont.children[3].previousElementSibling);


