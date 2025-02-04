const calculator = {
    add: function(a,b){
        return a + b;
    }, 
    sub: function(a,b){
        return a - b;
    }, 

    mul: function(a,b){
        return a * b;
    }, 

    div: function(a,b){
        return a / b;
    }, 
}

console.log(calculator)
console.log(calculator.add(2,3))
console.log(calculator.mul(8,43))
console.log(calculator.div(43,7))
console.log(typeof(calculator.div))

// method shorthand

const calculator2 = {
    add(a,b){
        return a + b;
    }, 
    sub(a,b){
        return a - b;
    }, 

    mul(a,b){
        return a * b;
    }, 

    div(a,b){
        return a / b;
    }, 
}
