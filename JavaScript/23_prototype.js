// This symbolises all functions and strings and arrays are Objects

let arr = ["Himanshi", "Parshav"]
let str = "Himanshi"

let obj = {
    Name1: "Himanshi",
    Name2: "Parshav"
}

let func = function (){
    Name = "Himanshi"
    Age = 19
}

Object.prototype.all = function (){
    console.log("This can be accessed by all")
}

Array.prototype.arrayonly = function (){
    console.log ("This can be accessed only by Arrays")
}

String.prototype.stronly = function (){
    console.log ("This can be accesed only by String")
}
Function.prototype.funconly = function (){
    console.log("This can be accessed only by Function")
}

arr.all()
str.all()
obj.all()
func.all()

arr.arrayonly()
// str.arrayonly()
// obj.arronly()
// func.arronly()

// arr.stronly()
str.stronly()
// obj.stronly()
// func.stronly()

// arr.funconly()
// str.funconly()
// obj.funconly()
func.funconly()


let string = "Himanshi     "

String.prototype.str = function (){
    console.log(this)
    console.log(`${this.trim().length}`)
}
string.str()