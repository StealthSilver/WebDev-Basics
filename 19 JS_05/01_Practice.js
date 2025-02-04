let maxNo = prompt("Enter the max Number");

let randomNo = (Math.floor(Math.random() * maxNo) + 1);

let guess = prompt("Guess the random Number")

while(true){
    if(guess != randomNo){
        let guess = prompt("Guess the random Number")
        console.log(randomNo)

    }
    else if(guess == randomNo){
        console.log(`you guessed correct no was ${randomNo}`)
        break;
    }
}