let i = 1;

while(i<=5){
    console.log(i);
    i++;
}


const favMovie = "avatar";

let guess = prompt("guess my fav movie");

while((guess != favMovie) && (guess != "quit")){
    guess = prompt("wrong guess,  please try again")
}

if(guess == favMovie){
    alert("congrats")
}else{
    alert("you quit")
}