const student = {
    name: "groot",
    age:23,
    eng:45,
    mat:90,
    his:78,
    getAvg(){
        console.log(this)
        let avg = (this.eng + this.mat + this.his)/3;
        console.log(avg);
    }
}


let a = 90;

try{
    console.log(a)
}
catch{
    console.log("the variable dosent exist");
}


try{

    console.log(b);

}catch (err){
    console.log("caught an error .... b is not defined");
    console.log(err);
}