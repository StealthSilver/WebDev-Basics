h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay);
    });
}

async function demo() {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("magenta", 1000);
    changeColor("yellow", 1000);
}