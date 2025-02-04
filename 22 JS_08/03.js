// default parameter

function sum(a, b=9){
    return a + b;
}

console.log(sum(1));

// spread

a = Math.min(1,2,3,0);
console.log(a);

let arr = [1,2,3,4,5,3,34,1,3,3,31,1,1,3,4,5,5,33,1,1];

b = Math.min(...arr);

console.log(b)

arr.push(-1);

c = Math.min(...arr);

console.log(c)

console.log(...arr);

console.log(...'I am groot');

let arr3 = [1,2,3,4];
let newArr = [...arr];

console.log(newArr);

let chars = [...'hello'];
console.log(chars)


// spread with array and string

let odd= [1,3,5,7,9];
let even = [2,4,6,8];

let nums  = [...odd , ...even];

console.log(nums)

let nums2  = [...even , ...odd];

console.log(nums2)

// spread with object

const data= {
    email: "iamgrrott@mal.com",
    password: 'ferq'
};

const dataCopy = {...data, id:123, country:'India'};

console.log(dataCopy)

let obj1 = {...arr}
console.log(obj1)

let obj2 = {...'gfowjfe'};
console.log(obj2)

