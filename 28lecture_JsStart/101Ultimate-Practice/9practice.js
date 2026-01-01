// applying random color on given boxes

let color = {
    1 : "red",
    2 : "blue",
    3 : "green",
    4 : "yellow",
    5 : "teal",
}

function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = color[random(0, 6)];
    e.style.color = "white";
    
})