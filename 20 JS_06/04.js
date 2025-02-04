// function scope

function calSum(a,b){
    let sum = a + b;
}
console.log(calSum(1,2));

// the sum variable can only be used in the function, cannot be used outside.

let sum = 90; // this is a global scoped variable, can be used anywhere


// block scope

{
    let a = 90;
}

console.log(a); // this will give an error

for(let i=1; i<5; i++){
    console.log(i);
}

console.log(i) // this will give an error

let age = 90;

if(age> 18){
    let str = "adult";
    console.log(str); // this will not give error
}

// lexical scope

function outerFunc(){
    let x = 5;
    let y = 9;

    function innerFunc(){
        console.log(x);
        console.log(y);
    }

    innerFunc();
}

outerFunc()

function outerFunc(){
    let x = 5;
    let y = 9;

    function innerFunc(){
        let a = 9;
        console.log(x);
        console.log(y);
    }
    console.log(a) // this will give an error
    innerFunc();
}

// we cannot call the inner function outside hte outer function