class a{
    constructor(Name, Age){
        this.Name = Name
        this.Age = Age
    }

    get Name (){
        return this._Name.toUpperCase() // This underscore makes it private as if it is not there then there will be a race to set properties of the object which will cause error.
    }
    set Name (value){
        this._Name = value
    }

    get Age (){
        return this._Age.toLowerCase()
    }oStrin
    set Age(value){
        this._Age = value
    }
}

let x = new a("Himanshi", "NiNeTeEn")
console.log(x.Name)
console.log(x.Age)


// Lexical Scoping can be said as Functions inside a function