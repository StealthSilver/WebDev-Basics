function sum(a,b){
    console.log("hello")
    console.log("hello")
    return a + b;
    console.log("hello2")
}

console.log(sum(3,6));

console.log(sum(sum(1,2),3))

function isAdult(age){
    if(age >= 18){
        return "adult";
    }
    else{
        return " not adult";
    }

    console.log("bye bye")
}

console.log(isAdult(43))