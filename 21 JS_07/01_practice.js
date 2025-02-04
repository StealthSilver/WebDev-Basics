
const square = (n) =>  n*n;
   


console.log(square(8));

let id = setInterval(() => {
    console.log("hello world")
},2000);


setTimeout(() => {
    clearInterval(id);
},10000);