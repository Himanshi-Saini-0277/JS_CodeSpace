function f(){
    console.log("H")
    console.log("i")
    console.log("m")
    console.log("a")
    console.log("n")
    console.log("s")
    console.log("h")
    console.log("i")
}

f()

function sum(num1, num2){
    return num1+num2
}

console.log(sum(5, 6))
const result = sum(10, 10)
console.log(result)

function h(name){
    if (!undefined){
        console.log("Please enter your name")
        return
    }
    return `${name} just logged in`
}

console.log(h())

function g(name = "Ram"){ // Default value will be Ram and when we enter our name it overides Ram
    return `${name} just logged in`
}

console.log(g("Himanshi"))


function l(a1, a2, ...m){
    return a1,a2,m
}
console.log(l(10,20,30,40)) // First two values will go to a1 and a2 respectively

const hi = [5,15,25,35,45]

function m(){
    console.log(`Index of 15 is ${hi.indexOf(15)} and length of array is ${hi.length}`)
}

m(hi)


function one(){
    let name = "Himanshi"

    function two(){
        console.log(`I am ${name}`)
    }
    two()
}
one()