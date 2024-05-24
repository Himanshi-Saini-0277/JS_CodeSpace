// Heap (Non Primitive)
// In this every Variable takes the reference from the Object anad is not a dublicate or copy value

let a = {
    Name:"Himanshi",
    Age : 19
}

console.log(a.Name)

a.Age = 18
console.log (a.Age)

// Stack (Primitive)
//  In this the changed value prints the copy

let Name = "Himanshi"
Name = "Parshav"

console.log (Name)