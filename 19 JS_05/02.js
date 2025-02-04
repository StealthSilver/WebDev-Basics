const student = {
    name: "groot",
    age: 89,
    marks:89.3,
    city: "delhi"
}

console.log(student)

student.city = "Mumbai"

console.log(student)

student.gender = "F"
console.log(student)

student.marks = 'A';
console.log(student)

// nested objects

const classInfo ={ 
    aman : {
        grade : "A+",
        city: "Delhi"
    },

    ram : {
        grade : "C",
        city: "Pune"
    },

    rahul : {
        grade : "A",
        city: "Mumbai"
    }
}

console.log(classInfo)
console.log(classInfo.rahul)
console.log(classInfo.rahul.city)

//array of objects

const school = [
    {
        name: "Aman",
        grade : "A+",
        city: "Delhi"
    },

    {
        name: "Rahul;",
        grade : "A+",
        city: "Uri"
    },

    {
        name: "Shyam",
        grade : "A+",
        city: "Pune"
    }




]


console.log(school)

console.log(school[1].city)

