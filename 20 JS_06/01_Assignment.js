
function larger(n){
    let arr = [2,3,4,5,6,7,8,9];
    let arr2 = [];
    for(let i =0; i<= (arr.length - 1); i++){
        if(arr[i] > n){
            arr2.push(arr[i]);
        }
    }

    return arr2;
}

console.log(larger(3))


function unique(str){
    let a = "";

    for(let i=0; i<= (str.length-1); i++){
       
            let char = str[i];

            if(a.indexOf(char) == -1){
                a += char;
            }
        }

        return a;
    }

    

console.log(unique("uniun"));


function long(arr){

    longest = 0;
    for(let i=0; i<= (arr.length -1); i++){
        let ansLen = arr[longest].length;
        let currLen = arr[i].length;

        if(currLen > ansLen){
            longest = i;
        }
    }

    return arr[longest]
}

console.log(long(["p", "prewqerewq"]))




function countVovel(str){
    let count = 0;

    for(let i =0; i< str.length; i++){
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u" 

        )
        {
            count ++;
        }
    }

    return count;
}

console.log(countVovel("poffhiehfie"))


function random(start ,end){
    let diff = end  - start;

    return Math.floor((Math.random()*diff) + start)
}

console.log(random(9,43));