function multipleGreet(func , count){
    for(let i =1; i<=count; i++){
        func()
    }
}


let greet = function(){
    console.log("hello");
}

greet();
greet();

console.log("highe order function")
multipleGreet(greet, 10)

multipleGreet(function(){
    console.log("groot")
}, 32);
