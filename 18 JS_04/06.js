let fruits = ['mango' , 'banana' , 'lichi'];

for(i of fruits){
    console.log(i);
}

for(char of "I am groot"){
    console.log(char)
}

//nested for of loop

for(i of fruits){
    for(j of i){
        console.log(j)
    }
}