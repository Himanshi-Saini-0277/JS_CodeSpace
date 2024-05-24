let a = [10,20,30,40,50]
let b = ["Himanshi", "Parshav", "Ram"]

const f = a.concat(b) // Limitation: in this we can not combine more then two arrays
console.log(f)

const g = [...a, ...b] // n number of arrays can be combined
console.log(g)

let h = [1,2,3,[4,5],6, [7,8,9]]
console.log(h.flat())

console.log(Array.from({Name: "Himanshi"})) // gives an empty array 

console.log(Array.from("Himanshi"))

a.push(b)
console.log(a)

a.unshift(9)
console.log(a)

console.log(a.join())

let c = a.slice(1,3)
console.log(a)
console.log(c)

let d = a.splice(1,3)
console.log(a)
console.log(d)