function sumN(n){
    let sum = 0;

    for(let i = 0; i<=n; i++){
        sum = sum + i;
    }

    return sum;

}

console.log(sumN(10))

function concat(arr){
    let str = "";

    for(let i=0; i<= (arr.length-1); i++){
        str = str + arr[i];

    }

    return str;
}

console.log(concat(["hi" , 'bye']))