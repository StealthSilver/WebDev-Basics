let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onLCick = sayHello;
    // btn.onLCick = sayName;

    btn.addEventListener("click", sayHello)
    btn.addEventListener("click", sayName)
    btn.addEventListener("dblclick", function(){
        console.log("you double clicked me")
    })

}


function sayHello(){
    alert("Hello");
}

function sayName(){
    alert("pogo");
}