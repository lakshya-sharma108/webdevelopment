// Events in JavaScript:

/*
    What Is an Event?
    An event is something that happens on a webpage — a signal that something occurred, and JavaScript can react to it.

    Think of it like:
    “Hey JS, someone just clicked this button!”
                        or
    “Yo, the user pressed a key on the keyboard!”

    JavaScript listens to these signals and runs some code in response — this is called event handling.
*/



// function buttonClicked(){
//     console.log("Button clicked!!");
// }




// 2. Second way of add an event
// Mostly we don't use this way either
document.getElementById("button").onclick = function () {
    console.log("Button Dabgaya!!");
}




// 3. Third way of add an event -- EventListner
// Mostly we use the third way to add an event
document.getElementById("button").addEventListener("click", function(){
    console.log("Who the fuckkkk clicked the button!! 🤬");
});






// Practice:

// Mouse Enter Event 
document.getElementById("box").addEventListener("mouseenter", function(){
    document.getElementById("box").style.backgroundColor = "blueviolet";
    document.getElementById("box").style.borderRadius = "50%";
});

// Mouse Leave Event
document.getElementById("box").addEventListener("mouseleave", function(){
    document.getElementById("box").style.backgroundColor = "cadetblue";
    document.getElementById("box").style.borderRadius = "15px";
});




// Change Events -- tigers when you write something in input box and unfocus
document.getElementById("input").addEventListener("change", function(){
    // console.log("Input/Change Event Triggred");

    // This is how we get the input value using value attribute
    let inputValue = document.getElementById("input").value;
    console.log(inputValue);
});


// Input Event -- triggers every time when you write or delete something in input box
document.getElementById("input").addEventListener("input", function(){
    // console.log("Input/Change Event Triggred");

    // This is how we get the input value using value attribute
    let inputValue = document.getElementById("input").value;
    console.log(inputValue);
});