// for of 
// ["", "", ""] array of strings
// [ {}, {}, {}] array of Objects

let Name = "Himanshi"
for (const name of Name) {
    console.log(`${name}`)
}

let Age = [19]
for (const a of Age) {
    console.log(`${a}`)
}


//  Maps
// They do not print the duplicate values and also print the values in same series as given

let map = new Map()
map.set ("IN", "India")
map.set("USA", "United states of America")
map.set ("Aus", "Australia")
map.set ("IN", "India")

console.log(map)
console.log(map.values())
console.log(map.keys())

for (const [key, value]  of map) {
    console.log(`${key} - ${value}`)
}


// for in

let s = {
    js : "javaScript",
    java: "java",
    cpp: "c++",
    py: "python"
}

for (const b in s) {
    console.log(`${b} for ${s[b]}`)
}


// for each

let arr = ["java", "python", "cpp", "JavaScript"]
arr.forEach( function (item) {
    console.log (item)
})

let obj = [
    {
        Name: "Java",
        id: "java"
    },
    {
        Name : "Python",
        id : "py"
    },
    {
        Name: "JavaScript",
        id : "js"
    },
    {
        Name : "C++",
        id : "cpp"
    }
]

obj.forEach((keys, index) => {
    console.log(keys.Name, index, keys.id)
})
