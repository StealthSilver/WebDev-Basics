console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(!true);
console.log(!false);


let string = "air";

if((string[0] == 'a') && (string.length > 3)){
    
        console.log("Good String");

}
else{
    console.log("not a good string");
}


// if(true){
//     console.log("it has true value")
// }
// else{
//     console.log("it has false value"); //this is never possible
// }

if(0){
    console.log("it has true value") // this will never execute
}
else{
    console.log("it has false value"); 
}

if(""){
    console.log("it has true value") // this will never execute
}
else{
    console.log("it has false value"); 
}

if(null){
    console.log("it has true value") // this will never execute
}
else{
    console.log("it has false value"); 
}

if(4234){
    console.log("it has true value") 
}
else{
    console.log("it has false value"); // this will never execute
}

if(true){
    console.log("this has true value")
}
else{
    console.log("it has false value")
}
let str = "";

if(str){
    console.log("the string is not empty")
}
else{
    console.log("the string is empty")
}