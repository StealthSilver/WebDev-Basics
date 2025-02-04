let btn = document.querySelector("button");
let p = document.querySelector("p");

p.addEventListener("click" , function(){
    console.log("para was clicked")
})


btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    // Add "rgb" prefix to make it a valid CSS color
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}