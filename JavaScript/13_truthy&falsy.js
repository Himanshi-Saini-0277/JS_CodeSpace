let Name = "Himanshi"

if (Name){
    console.log(`Name is ${Name}`)
}

else {
    console.log("Name not found")
}

// truthy values{
//    "0", 'false', " ", {}, [], function(){}
// }

// falsy values{
//     0, -0, BigInt , 0n, "", null, undefined, NaN
// }

if (Name.length === 0){
    console.log("Array is Empty")
}
else {
    console.log(`${Name.length}`)
}

if (Object.keys(Name).length === 0){
    console.log("Name is Empty")
}
else {
    console.log(`${Object.values(Name)}`)
    console.log(`${Object.keys(Name)}`)
}


// Nullish Coalescing Operator (??) : null and undefined 
let a;
a = 10+20

let b = null ?? a
let c = undefined ?? 15
let d = 10 ?? a

console.log(b)
console.log(c)
console.log(d)


// Terniary Operator 

const x = 100
x <= 80 ? console.log("80 is more than x") : console.log("80 is less than x")