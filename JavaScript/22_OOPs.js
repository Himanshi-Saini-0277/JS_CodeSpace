// Object literal
let a = {
    UserName: "Himanshi",
    Age: 19,
    Course: "B.Tech",

    Name: function(){
        return (`Hello ${this.UserName}`)
    }
}
console.log(a)
console.log(a.UserName)
console.log(a.Name())

function z (UserName, Age, Course){
    this.UserName = UserName,
    this.Age = Age,
    this.Course = Course

    return this
}

console.log(z("Himanshi", 19, "B.Tech"))

let y = new z("Parshav", 18, "MBBS") // new is added so that the next it would not get overloaded 
console.log(y)
let x = new z("Suman", 40, "M.A.")
console.log(x)

console.log(y.constructor) // construction is the refference of your own self
console.log(x instanceof Object) // instanceof is boolean, we use to test if an object is of a given type


//Object and New 

function b (num){
    return num*5
}

b.power = 2

console.log(b(5))
console.log(b.power)
console.log(b.prototype)

function f (username, price){
    this.username = username,
    this.price = price
}
f.prototype.increment = function(){
    this.price ++
    console.log(`Incremented price is ${this.price}`)
}
f.prototype.print = function (){
    console.log(`Price is ${this.price}`)
}

let chai = new f("chai", 25)
let tea = new f("tea", 250)

chai.print()
tea.increment()