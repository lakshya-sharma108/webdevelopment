// Form Events:


// In this there is a problem that is when we click submit button, it refreshes the web page
// and we can't see output on console

// document.getElementById("signup").addEventListener("submit", function(){
//     console.log("Form Submitted!!");
// });



// Solution of how to prevent refreshing of web page:
// Taking "e" parameter as Events object in function which is inside EventListener and calling a method 
// using e object which prevents refreshing 

// document.getElementById("signup").addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log("Form Submitted!!");
// });



// Consoling the value after submission
document.getElementById("signup").addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Form Submitted!!\n\n");

    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    console.log("Here's the data:");
    console.log("First Name: ", fName);
    console.log("Last Name: ", lName);
    console.log("Email id: ", email);
    console.log("Password: ", pass);
});
