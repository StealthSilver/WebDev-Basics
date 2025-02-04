let nums = [1,2,3,4,5];

console.log(nums.indexOf(3));

console.log(nums.includes(4));
console.log(nums.includes(9));

let nums2 = ['1' , 'a' , 'b' , 'c'];

console.log(nums.concat(nums2));
console.log(nums2.concat(nums));

console.log(nums2.reverse)

console.log(nums.slice(0,3))
console.log(nums.slice(1))
console.log(nums.slice(-2))


console.log(nums2.splice(2 , 2));
console.log(nums2)

console.log(nums2.splice(0,1,"p"))
console.log(nums2)

console.log(nums2.splice(0,1,"u" , "i" , "u"));
console.log(nums2)

console.log(nums2.splice(1, 0 , "middle element"))
console.log(nums2)

// sorting

let array = [1,3,545,646,345,234,25,3,53];

let alph  = ["po" , "fheu" , "feh" , "fjeisfse"];

console.log(array.sort())
console.log(alph.sort())


// array refrences

console.log("name" == "name")
console.log("name" === "name")
console.log([1] == [1])
console.log([1] === [1])
console.log([] == [])
console.log([] === [])

let a = ['a' , 'b'];

let aCopy = a;

console.log(aCopy);

aCopy.push("c");

console.log(aCopy);
console.log(a == aCopy)

//constant arrays

const arr3 = [1,2,3];

arr3.push(4);
console.log(arr3)

// nested array

let array2 = [[1,2] , [3,4] , [5,7] , [8,0]];

console.log(array2);
console.log(array2.length)

console.log(array2[2][1])