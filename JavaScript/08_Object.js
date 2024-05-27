// Object Laterals +++++++++++++++++++++++++++++++

const a = Symbol("Himanshi")

let b = {
    Name: "Himanshi",
    Age: 19,
    [a]: "Parshav",
    Location: "Ambala",
    House: 339,
    isLoggedIn: false
}

// de-Structure a key (Eg: If we have to use a key again and again and it is a big string then rename it to short)
const {isLoggedIn : q} = b
console.log(q)

console.log(Object.keys(b)) // Make an array of keys of b


console.log(b.Location)
console.log(b["Location"])

console.log(b[a])

console.log(b)

Object.freeze(b.Age) // Do not let change the value futher
Age = 20
console.log(b.Age)

b.c = function(){
    console.log("Hi i am Himanshi")
}
console.log(b.c())

b.d = function(){
    console.log(`I am ${this.Name}`)
}
console.log(b.d())

//  Object Singleton +++++++++++++++++++++++++++++++++

const s = {}
s.Name = "Himanshi"
s.Age = 19
s.Location = "Ambala"

console.log(s)

const k ={
    Me: {
        Myself:{
            Name: "Himanshi",
            Age: 19,
            Location: "Ambala"
        }
    }
}
console.log(k.Me.Myself.Name)
console.log (Object.keys(k))

const x = {1:"a", 2:"b"}
const y = {3:"c", 4:"d"}

console.log ({x,y})
console.log(Object.assign({},x,y)) // if we do not use {} all the values will move to x
console.log ({...x, ...y})

let g = [{
    Name: "Himanshi",
    Age: 19,
    Location: "Ambala"
},
{
    Name: "Parshav",
    Age: 17,
    Location: "Kurukshetra"
}
]

console.log(g[0].Name)

// Json ++++++++++++++++++++++++++++++++++

{
    // "Name" : "Himanshi" // this is the correct format ":" this is not an error 
    // to check for the tree of online json API in order to understand them go to json Formatter
}
{}
{}
