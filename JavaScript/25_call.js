let a = function (username){
    this.username = username
}

let b = function (username, age,course){
    a.call(this, username) // here "this" is of a without this the function would be called but the varibles in it would not be called
    this.age = age
    this.course = course
}

console.log(new b("Himanshi", 19, "B.Tech"))
