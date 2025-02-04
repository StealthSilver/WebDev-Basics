//forEach

let arr = [1,2,3,4,5,6];

function print(el){
    console.group(el);
}

arr.forEach(print);

arr.forEach(el => {
    console.log(`${3*el}`);
});

let arr2 = [{
    name: "pogo",
    marks: 90
}, {
    name: 'ollie',
    marks:54,

},{
    name:'plot',
    marks:33
}]

arr2.forEach(el => {
    console.log(el.marks);
})

//map

let num = [1,2,4,5,6,7];

let double = num.map((el) => {
    return el*el;
});

console.log(double);

let triple = num.map((el) => {

})

console.log(triple);

let gpa = arr2.map((el) => {
    return el.marks/10;
})

console.log(gpa);


//filter

let digits = [1,2,3,45,5,6,8,54,3,1,2];

let result = digits.filter((el) => {
    return el%2 ==0;
})

console.log(result);

let result2 = digits.filter((el) => {
    return el <5;
})

console.log(result2);

