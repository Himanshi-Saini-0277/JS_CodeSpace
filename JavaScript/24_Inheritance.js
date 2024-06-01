// Internal Inheritance

let a = {
    Name: "Himanshi",
    Age: 19
}

let b = {
    __proto__: a,
    Course: "B.tech"
}

console.log(b.__proto__)
console.log(b)

// External Inheritance

let c = {
    Name: "Parshav",
    Age: 18
}

let d = {
    Course: "MBBS"
}
console.log(c)

c.__proto__ = d
console.log(c.__proto__)

// Modern Syntax
let x = Object.setPrototypeOf(b,a)
console.log(x)
