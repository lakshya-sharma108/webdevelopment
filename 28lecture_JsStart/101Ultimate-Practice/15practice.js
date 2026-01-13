// Hacker terminal

const addItem = async (item)=>{
    await randomDeley();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}

const randomDeley = ()=>{
    let timeout = 1 + 6 * Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    })
}

async function main() {
    
    
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length-1];
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else{
            last.innerHTML = last.innerHTML + "."
        }
    }, 400);
    
    let text = [
        "Initialized hacking, now reading your data",
        "Reading your files",
        "Password files detected",
        "Sending all password and personal files to server",
        "Cleaning up",
    ]
    
    
    for (const item of text) {
        await addItem(item)
    }

    await randomDeley();
    clearInterval(t);

}

main();

