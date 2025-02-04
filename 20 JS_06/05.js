// lexical scope

function outerFunc(){


    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    let x = 5;
    let y = 9;
    innerFunc();   
}

outerFunc()