class a {
    constructor (username, age, course){
        this.username = username
        this.age = age
        this.course = course
    }

    changedage(){
        return `${this.age} -> 20`
    }

    changedcourse(){
        return `${this.course} -> MBBS`
    }

    changedname(){
        return `${this.username.toUpperCase()}`
    }
}

const b = new a ("Himanshi", 19, "B.Tech")
console.log(b)

console.log(b.changedage())
console.log(b.changedcourse())
console.log(b.changedname())


// behind the scene if we would not have class 

function y (username, age, course) {
    this.username = username
    this.age = age
    this.course = course
}

y.prototype.changedage = function (){
    return `${this.age} -> 20`
}

y.prototype.changedcourse = function (){
    return `${this.course} -> MBBS`
}

y.prototype.changedname = function(){
    return `${this.username.toUpperCase()}`
}
let x = new y("Himanshi", 19, "B.tech")
console.log(x)

console.log(x.changedage())
console.log(x.changedcourse())
console.log(x.changedname())