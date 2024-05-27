// filter

let a = [1,2,3,4,5,6,7,8,9]
a = a.filter((num) => {
    return num >4
})
console.log(a)

// filter map

let b = [1,2,3,4,5,6,7,8,9]
.map ((b) => b*10)
.map ((b) => b+1)
.filter ((b) => b>50)

console.log(b)

// reduce

let c = [1,2,3]
let d = c.reduce(function (acc , curr){
    console.log(`acc is ${acc} an curr is ${curr}`)
    return acc +curr
},0) // initialize acc 
console.log(d)

let e = c.reduce ((acc, curr) => {
    return acc +curr
},0)

console.log(e)