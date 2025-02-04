//every

let arr = [1,2,3,4,5];

let a = arr.every((el) => {
    el % 2 ==0;
})

let b = arr.every((el) => {
    el < 10;
})

console.log(a);
console.log(b);

//some

let c = arr.some((el) => {
    el % 2 ==0;
})

let d = arr.some((el) => {
    el < 10;
})

console.log(c);
console.log(d);

//reduce

e = arr.reduce((res, el) => (res + el));
console.log(e);

let nums = [1,2,3,4,5];

let finalVal  = nums.reduce((res, el) => {
    console.log(res);
    return res + el;
});

console.log(finalVal)

let arr3 = [1,2,3,5,7,9,4,2,35,1,1,43];

let max = arr3.reduce((max, el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
});

console.log(max);

