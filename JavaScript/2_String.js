let Name = "Himanshi"
let Age = 19

console.log(`I am ${Name}`)

const h = new String ("Himanshi")
console.log(h)

console.log(h[0])
console.log(Name.__proto__) //objects have a property named __proto__ that points to their prototype (or parent) object.

console.log (h.length)
console.log (h.charAt(2))
console.log (h.indexOf('s'))
console.log (h.toUpperCase())
console.log(h.substring(2,8)) // if you out negative value here then tit will consider it as 0 for first and h.length for last
console.log(h.slice(2,6))
console.log(h.trim()) // it removes the spaces 