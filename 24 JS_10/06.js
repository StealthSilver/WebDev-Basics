let form = document.querySelector("form");

form.addEventListener('submit' ,function(event){
    event.preventDefault(); // prevents to go on /action
    

    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value)
    console.log(pass.value)

    alert(`hi ${user.value} , your password is set to ${
        pass.value
    }`);
})



