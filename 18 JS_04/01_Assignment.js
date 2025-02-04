let arr = [1,2,3,4,5,43,2,1];

let num = 4;

for (i of arr){
    if (arr[i] == num){
        arr.splice(i , 1)
    }
}

console.log(arr)

let number = 4342344234223;
let count = 0;
let str = number.toString();

for(i of str){
    count++;
}
console.log(count)


let num2 = 10;

let fact = 1;

for(let i=1; i<=num2; i++){
    fact = fact*i;
}

console.log(fact)



let numbers = [12, 45, 78, 34, 89, 23];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The largest number is:", largest);

function sumOfDigits(number) {
    let sum = 0;

    while (number > 0) {
        sum += number % 10; 
        number = Math.floor(number / 10); 
    }

    return sum;
}


