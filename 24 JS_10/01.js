let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function(){
    console.log("button was clicked");
    alert("clicking !!")
}

function sayHello(){
    alert("hello");
}

btn.onclick = sayHello;

let btns = document.querySelectorAll("button");

for (btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("you entered a buton")
    }
}


