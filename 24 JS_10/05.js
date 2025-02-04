let btn = document.querySelector("button");

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("key was pressed");
    console.log(event.key);
    console.log(event.code);
})

inp.addEventListener("keyup", function(){
    console.log("key was released");
})


btn.addEventListener("click", function(event){
    console.log(event);
})