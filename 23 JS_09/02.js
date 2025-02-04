
let para1 = document.createElement("p");
para1.innerText = "Hi I am red";

document.querySelector("body").append(para1);

para1.style.color = 'red'



let h3 = document.createElement("h3");
h3.innerText = "Hi I am blue heading";

document.querySelector("body").append(h3);

h3.style.color = 'blue'


let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "i am a div"
para2.innerText = "i am a para"

div.append(h1)
div.append(para2)


document.querySelector("body").append(div);

div.style.backgroundColor = 'pink'
div.style.height = '100px'
div.style.width = '50%'


let btn = document.createElement('button')

btn.innerText = "Click me"

document.querySelector("body").append(btn);


let input = document.createElement('input');
document.querySelector("body").append(input);

btn.setAttribute("id" , "btn")
input.setAttribute("placeholder" , "username")

let btn2 = documsnt.querySelector('#btn');
btn2.classList.add("btnStyle")

let heading = document.createElement('h1');

heading.innerHTML = "<u> DOM practivce </u>";
document.querySelector("body").append(heading);

let para = document.createElement('p');
para.innerHTML = "this is the practice <b> Assignment </b>";

document.querySelector("body").append(para);