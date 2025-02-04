


function oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }

        return odd;
        
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }

        return even;
    }else{
        console.log("wrong request")
    }
}

let request = "even";

let func = oddOrEvenFactory(request);
console.log(func)
console.log(func(12))
console.log(func(9))