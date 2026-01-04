// creating card using js:

document.body.style.backgroundColor = "antiquewhite"

function addCard(title, thumbnail, duration, time, views, author) {

    let div = document.createElement("div");
    document.querySelector(".container").append(div);
    div.setAttribute("class", "card");

    // card title
    let cardTitle = document.createElement("div");
    div.append(cardTitle);
    cardTitle.innerHTML = title;
    cardTitle.setAttribute("class", "title-card");


    // title styling
    cardTitle.style.display = "flex";
    cardTitle.style.flexDirection = "column";
    // cardTitle.style.alignItems = "center";
    // cardTitle.style.justifyContent = "center";
    cardTitle.style.marginLeft = "10px";
    // cardTitle.style.marginTop = "5px";
    // cardTitle.style.padding = "7px";
    cardTitle.style.width = "100%";
    cardTitle.style.height = "100%";
    cardTitle.style.fontSize = "16px";
    cardTitle.style.fontWeight = "bold";



    let bottomDiv = document.createElement("div");
    cardTitle.append(bottomDiv);
    bottomDiv.setAttribute("class", "bottomDiv");

    bottomDiv.style.width = "100%";
    bottomDiv.style.padding = "5px";
    bottomDiv.style.margin = "5px";






    // author styling
    let div2 = document.createElement("span");
    bottomDiv.append(div2);
    div2.innerHTML = author;
    div2.setAttribute("class", "author");

    div2.style.width = "30%";
    div2.style.height = "20px";
    div2.style.marginLeft = "5px";
    div2.style.marginTop = "5px";
    div2.style.paddingLeft = "20px";
    div2.style.fontSize = "12px";
    div2.style.fontWeight = "300";
    div2.style.color = "grey";
    // div2.style.textAlign = "center";



    // views styling
    let div4 = document.createElement("span");
    bottomDiv.append(div4);
    div4.innerHTML = views + "K views";
    div4.setAttribute("class", "time");

    div4.style.width = "50%"
    div4.style.marginLeft = "10px"
    div4.style.marginTop = "5px"
    // div4.style.paddingLeft = "10px"
    div4.style.fontSize = "12px";
    div4.style.fontWeight = "300";
    div4.style.color = "grey";



    // time styling
    let div3 = document.createElement("span");
    bottomDiv.append(div3);
    div3.innerHTML = time + " months ago";
    div3.setAttribute("class", "time");

    div3.style.width = "30%"
    div3.style.marginLeft = "5px"
    div3.style.marginTop = "5px"
    div3.style.paddingLeft = "10px"
    div3.style.fontSize = "12px";
    div3.style.fontWeight = "300";
    div3.style.color = "grey";



    // card styling
    div.style.display = "flex";
    div.style.width = "100%";
    div.style.margin = "5px";
    div.style.padding = "5px";
    div.style.borderRadius = "5px";
    div.style.border = "1px solid lightgrey";
    div.style.backgroundColor = "white";



    // thumbnail wrapper
    let thumbWrapper = document.createElement("div");
    thumbWrapper.style.position = "relative";
    thumbWrapper.style.width = "15%";
    div.prepend(thumbWrapper);

    // inserting thumbnail
    let img = document.createElement("img");
    img.src = thumbnail;
    img.style.width = "100%";
    img.style.borderRadius = "5px";
    thumbWrapper.append(img);

    // duration styling
    let durationSpan = document.createElement("span");
    durationSpan.innerHTML = duration;
    thumbWrapper.append(durationSpan);

    durationSpan.style.position = "absolute";
    durationSpan.style.bottom = "5px";
    durationSpan.style.right = "2px";
    durationSpan.style.backgroundColor = "black";
    durationSpan.style.color = "white";
    durationSpan.style.padding = "2px 4px";
    durationSpan.style.borderRadius = "3px";
    durationSpan.style.fontSize = "8px";
    durationSpan.style.opacity = "0.8";


}



addCard("How to master the art of communication!!! | #mastercommnication", "./0Images/1image.jpeg", "20:13", 3, 360, "Lucky Sharma");

addCard("Learn JavaScript in 1 Hour | JavaScript Tutorial for Beginners", "./0Images/2image.jpg", "1:02:45", 6, 420, "Code with Harry");

addCard("Learn HTML in 1 Hour | HTML Tutorial for Beginners", "./0Images/3image.png", "1:15:30", 12, 580, "Code with Harry");

addCard("Learn CSS in 1 Hour | CSS Tutorial for Beginners", "./0Images/4image.jpeg", "1:10:20", 9, 480, "Code with Harry");

//addCard("Learn ReactJS in 1 Hour | ReactJS Tutorial for Beginners", "./0Images/5image.jpg", "1:25:50", 4, 390, "Code with Harry");  

addCard("Learn NodeJS in 1 Hour | NodeJS Tutorial for Beginners", "./0Images/6image.jpg", "1:30:10", 5, 410, "Code with Harry");