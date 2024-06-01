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


// Main Inheritance

class p{
    constructor (username){
        this.username = username
    }

    fromp(){
        return (`from p ${this.username}`)
    }

    static something(){ // This will neither work for parent class nor for inherited class because of static
        return 0
    }
}


class q extends p {
    constructor (username, age, course){
        super(username)
        this.age = age
        this.course = course
    }

    fromq(){
        return (`from q ${this.username}`)
    }
}

let r = new q ("Himanshi", 19 , "B.tech")
let s = new p ("Parshav")

console.log(r)
console.log(r.fromp())
console.log(r.fromq())

console.log(s)
console.log(s.fromp())
// console.log(s.fromq()) // do not have access 