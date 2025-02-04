
let i = 1;

while(i<=5){
    if(i==3){
        break;
    }
    console.log(i);
    i++;

}

console.log("we used break at 3");



let fruits = ['apple' , 'amngo' , 'guava' , 'papaya'];

for(let i=0; i< fruits.length; i++){
    console.log(i, fruits[i]);
}


let char  = [['a' , 'b' ,'c','d'], ['e','f','g']];

for(let i =0; i<char.length; i++){
    console.log(`List #${i+1}`);
    for(let j=0; j<char[i].length; j++){
        console.log(char[i][j]);
    }
}

let student = [['groot' , 89] , ['lopo' , 45] , ['pogo' ,90]];

for(let i =0; i<student.length; i++){
    console.log(`info of student #${i+1}`)
    for(j=0; j<student[i].length; j++){
        console.log(student[i][j])
    }
}