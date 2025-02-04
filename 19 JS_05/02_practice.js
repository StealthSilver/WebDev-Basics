let max = prompt("enter the max number");

let random = Math.floor((Math.random()* max) + 1);

let guess = prompt("Guess the Numebr");

while(true){

    if(guess == "quit"){
    break;
}
    if(guess == random){
        console.log(`you guessed it, the numebr was ${random}`);
    }
    else if(guess < random){
        guess = prompt("guess is small, try again");
    }
    else{
        guess = prompt("guess is large, try again");

    }
}