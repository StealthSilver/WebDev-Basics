
let nums = [1,2,3,4];

const square = nums.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc , curr) => acc + curr, 0);

let avg = sum / nums.length;

console.log(avg);

let numbers = [2,4,5,79,-3]

console.log(numbers.map((number)=> number  + 5));

let strings = ["pogo" , "loki" , "kaju" , "freu"];

console.log(strings.map((string) => string.toUpperCase ()));

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr, 
    ...args.map((v) => v*2)];

let a = doubleAndReturnArgs([1,2,3,4],4,7);
let b = doubleAndReturnArgs([2],3,4,6);

console.log(a)
console.log(b)

const mergeObjects = (obj1 , obj2) => ({...obj1, ...obj2});

console.log(mergeObjects({a:1, b:2} , {c:3 , d:4}));