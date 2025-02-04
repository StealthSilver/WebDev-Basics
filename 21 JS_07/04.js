const student ={
    name: "pogo",
    marks: 98,
    prop:this, //global scope
    getName: function(){
        console.log(this)
        return this.name
    },
    getMarks: () => {
        console.log(this);  // parent's scope -> window
        return this.marks;
    },

    getInfo1: function(){
        setTimeout(() => {
            console.log("pogo")
        },2000);
    },

    getInfo2: function(){
        setTimeout(function(){
            console.log(this);
        
        },2000);
    }
}


const a = 90; //global scope


student.getName()
student.getMarks()
student.getInfo1()
student.getInfo2()
