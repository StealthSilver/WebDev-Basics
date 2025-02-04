let btn = document.querySelector("button");

btn.addEventListener("click" , function(){
    btn.style.color = 'green'
})

// Execute when the page is loaded
window.addEventListener("load", () => {
    console.log("Page fully loaded!");
    alert("Page is loaded!");
});

// Detect when the user scrolls the page
window.addEventListener("scroll", () => {
    console.log("You are scrolling!");
});

// Detect mouseout on the div
const testDiv = document.querySelector(".test-div");
testDiv.addEventListener("mouseout", () => {
    console.log("Mouse has left the div!");
    testDiv.style.backgroundColor = "lightcoral";
});

// Detect keypress in the input field
const inputField = document.querySelector("input");
inputField.addEventListener("keypress", (event) => {
    console.log(`Key pressed: ${event.key}`);
    inputField.style.backgroundColor = "lightyellow";
});