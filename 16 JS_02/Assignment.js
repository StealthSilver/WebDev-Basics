// let num  = 99;

// if(num % 10 == 0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

// let name = prompt("enter your name");
// let age = prompt("enter your age");

// alert(`${name} is ${age} years old`)

let quarter = 2;

switch(quarter){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July August September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log('wrong number');
}

let str = "Appledf";

if((str[0] == "A" || str[0] == "a") && (str.length > 5)){
    console.log("Golden string")
}
else{
    console.log("not a golden string");
}

let num1 = 8989;
let num2= 4343;

let strnum1 = num1.toString(); 
let strnum2 = num2.toString(); 


if(strnum1[strnum1.length - 1] == strnum2[strnum2.length - 1] ){
    console.log("same last digit")
}
else{
    console.log("not same");
}

// the above qustion is also possible by checking %10