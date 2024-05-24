const user = {
    Name: "Himanshi",
    Age: 19,
    Location: "Ambala",

    b:function() {
        console.log(`${this.Name}`);
    }
}
user.b()
console.log(this.Name); // undefined

user.Name = "Parshav"
console.log(user.Name)

const my = function() {   // this function does not work in this
    let Name= "Himanshi"
    console.log(this.Name)
}
my()


// Arrow function ++++++++++++++++++++

const me = () => {   // this function does not work in this
    let Name= "Himanshi"
    console.log(Name)
}
me()

const sum = (num1, num2) => (num1+num2)
console.log(sum(5,5))