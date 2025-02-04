let arr = [90,40,50,20];

let res = arr.every((el) => {
    el % 10 == 0;
})

console.log(res)


function getMin(nums){
    let min = arr.reduce((min,el) => {
        if(min < el){
            return min;
        }
        else{
            return el;
        }
    });

    return min;
}


console.log(getMin([1,2,3,4,5]));