
function printName(name, age){
    console.log(name);
    console.log(age)
}


printName("pogo" , 8);
printName("Tom" , 43)


printName("olli")
printName(32)


function sum(a,b){
    console.log(a+b);
}

sum(422,23423);

function average(a,b,c){
    console.log((a+b+c) / 3);
}

average(32,54,67);

function table(d){
    for(let i=1; i<=10; i++){
        console.log(` ${d} * ${i}  = ${d*i}`);
    }
}


table(8);