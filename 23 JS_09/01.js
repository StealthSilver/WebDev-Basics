let smallImages = document.getElementsByClassName("oldImg");

for(let i  =0; i< smallImages.length; i++){
    console.dir(smallImages[i].src);
}

console.dir(document.querySelector('h1'));
console.dir(document.querySelector('#description'));
console.dir(document.querySelector('.oldImg'));
console.dir(document.querySelector('div a'));
console.dir(document.querySelectorAll('div a'));

let para = document.querySelector('p');

console.log(para.innerHTML)
console.log(para.innerText)
console.log(para.textContent)

para.innerText = 'abc'
para.innerHTML = "hi i am <b>peter parker</b>"

let heading = document.querySelector('h1');
heading.innerHTMl = `<u> ${heading.innerText} </u>`;

let img = document.querySelector('img');
img.getAttribute('id');
img.setAttribute('id' , 'spidermanImg')

img.setAttribute('src' , 'assets/creation_3.jpeg')

heading.style.color = 'purple';
heading.style.backgroundColor = 'yellow';

anchor = document.querySelectorAll('.box a');

for(let i =0; i<anchor.length; i++){
    anchor[i].style.color = "red";
}

for (a  of anchor){
    a.style.backgroundColor = "blue"
}

img.classList.add("abc" , "xyz")

console.log(img.classList)



heading.classList.add("opacity")
console.log(heading.classList.contains('opacity'))
console.log(heading.classList.toggle('opacity'))


let h4 = document.querySelector('h4');
console.log(h4.parentElement);
console.log(h4.children);
console.log(h4.previousSibling);
console.log(h4.nextSibling);

h4.parentElement.style.color = "orange"

let newP = document.createElement('p');
newP.innerText = "hi i am a new P";

let body  = document.querySelector('body');
body.appendChild(newP)

let box = document.querySelector('.box');

box.appendChild(newP)

let btn = document.createElement('button');
btn.innerText = "click me"

box.appendChild(btn)

newP.append("this is new text")
newP.append(btn)

newP.prepend("this is new text prepend")

let p = document.querySelector('p')

p.insertAdjacentElement('beforebegin' , btn)

body.removeChild(btn)

p.remove();

