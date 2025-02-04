function printHello(){
    console.log("Hello");
}

printHello();
printHello();
printHello();
printHello();
printHello();


function printfive(){
    for(let i =1; i<=5; i++){
        console.log(i);
    }
}

printfive();

function isAdult(){
    let age = 19;

    if(age >= 18){
        console.log("Adult");
    }
    else{
        console.log("Not adult")
    }
}

isAdult();


function poem(){
    console.log("hello, helloooooo");
    console.log("this is a poem")
}

poem();

function diceRoll(){

    let num = (Math.floor(Math.random()*6 ) + 1);
    console.log(num)
}

diceRoll()