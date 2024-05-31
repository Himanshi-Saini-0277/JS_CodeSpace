new Promise (function (resolve, reject){
    setTimeout(function(){
        console.log("Himanshi")
        resolve()
    },1000)
}).then (function (){
    console.log("Saini")
})

let a = new Promise (function (resolve, reject){
    setTimeout(function (){
        resolve({UserName: "Himanshi", Laptop: "Zenbook"})
    }, 1000)
})
a.then(function(user){
    console.log(user)
})


let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
    if(!error){
        resolve({UserName: "Himanshi", Age: 19})
    }
    else{
        reject("Something went wrong")
    }
    }, 1000);
})

b.then((user) => {
    console.log(user)
    return user.UserName;
}).then((UserName) => {
    console.log(UserName)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("The promise is either resolved or rejected")
})

let c = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
    if(!error){
        resolve({UserName: "JavaScript", Laptop: "Zenbook"})
    }
    else{
        reject("Something went wrong")
    }
    }, 1000);
})

async function consumeC (){
    try{
        let d = await c
        console.log(d)
    }
    catch (error){
        console.log(error)
    }
}
consumeC()


async function get(){
    try {
        let a = await fetch("https://api.github.com/users/Himanshi-Saini-0277")
        let b = await a.json()
        console.log(b)
    } catch (error) {
        console.log(error)
    }
}
get ()


// Direct fetch 

fetch ("https://api.github.com/users/Himanshi-Saini-0277")
.then ((Response) => {
    return Response.json()
})
.then ((data) => {
    console.log(data)
})
.catch ((error) => console.log(error))