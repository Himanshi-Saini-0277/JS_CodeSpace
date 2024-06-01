let a = function (username){
    this.username = username
}

let b = function (username, age,course){
    a.call(this, username) // here "this" is of a without this the function would be called but the varibles in it would not be called
    this.age = age
    this.course = course
}

console.log(new b("Himanshi", 19, "B.Tech"))

// How to check the properties of anything

let x = {
    Name: "Himanshi"
}
console.log(Object.getOwnPropertyDescriptor(x, "Name"))

// Change the properties 
Object.defineProperty (x, "Name", {
    writable: false,
  enumerable: false,
  configurable: false
})

console.log(Object.getOwnPropertyDescriptor(x, "Name"))