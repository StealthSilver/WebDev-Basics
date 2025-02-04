let jsonRes = '{"fact":"Normal body temperature for a cat is 102 degrees F.","length":51}';

console.log(jsonRes)

let validRes = JSON.parse(jsonRes);
console.log(validRes)
console.log(validRes.fact)
console.log(validRes.length)

let student = {
    name: "pogo",
    marks: 90
}

console.log(student);
let StudentJSON = JSON.stringify(student);
console.log(StudentJSON)