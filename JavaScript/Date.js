console.log(new Date())
console.log(new Date().getDate())

console.log(new Date().toString())
console.log(new Date().toLocaleDateString())

console.log(new Date().toUTCString())


let my_date = new Date(2024,4,23,22,5)
console.log(my_date.toLocaleString())

console.log(Date.now())

console.log(my_date.getDate())

let newDate = new Date()

newDate.getTimezoneOffset('default',{
    weekday : "long",
    timeZone : "GMT+5.000"
})

console.log(newDate)
