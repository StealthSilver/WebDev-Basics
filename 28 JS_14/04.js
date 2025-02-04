h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num > 3) {
                reject("promise rejected")
            }
            h1.style.color = color;
            resolve();
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        await changeColor("magenta", 1000);
        await changeColor("yellow", 1000);
    } catch (err) {
        console.log("err caught");
        console.log(err)
    }

    let a = 8;
    console.log(a);
    console.log("new number  = ", 2 * a)
}