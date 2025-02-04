function one(){
    console.log("inside one")
    return 1;
}

function two(){
    console.log("inside two")

    return one() + one();
}

function three(){
    console.log("inside three")

    let ans = two() +one();
    console.log(ans);
}

three();