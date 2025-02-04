// rest

function sum (...args){
    for(let i =0; i<args.length; i++){
        console.log("you give us : ", args[i]);
    }

}

sum(1);
sum(2);
sum(23);


function min(a,b,c,d){
    console.log(arguments);
    console.log(arguments.length);
}

min()

function max(msg, ...args){
    console.log(msg);
    return args.reduce((min, el) => {
        if(min > el){
            return el;
        }
        else{
            return min;
        }
    })
}

// destructuring

let names = ['pogo', 'ollie' , 'loppo', 'loppo1', 'lopp2o'];

let [winner , runnerup , ...others] = names;

console.log(winner, runnerup , ...others);


const student = {
    name: 'karan',
    age: 24,
    class:22,
    subjects : ["eng", "hin" , "math"],
    username: "karan123",
    password: "giwgjif"
}

let {username , password} = student;

console.log(username)
console.log(password)

let{username: user , password: secret , city = 'pune' } = student;

console.log(username)
console.log(user)
console.log(password)
console.log(secret)

console.log(city)