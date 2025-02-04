h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay);
    });
}

changeColor("red", 1000)
    .then(() => changeColor("green", 1000))
    .then(() => changeColor("orange", 1000))
    .then(() => changeColor("blue", 1000))
    .then(() => changeColor("hotpink", 1000));