const avg = (arr) => {

    let sum = 0
    for(let i =0; i< arr.length; i++){
        sum += arr[i];
    }

    console.log(sum / arr.length)
}

avg([1,2,3,4,5]);

const isEven = (n) => {

    if(n%2==0) {
        return "even";
    }
    
}

console.log(isEven(8));

const object = {
    message: "hello",
    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000); // undifined will be output

let length = 4;

function callback(){
    console.log(this.length);

}

