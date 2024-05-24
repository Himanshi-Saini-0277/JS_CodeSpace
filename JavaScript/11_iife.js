// sometimes global scope creats pollution to reduce pollution we use iife , it also calls the function imediately

(function m(){
    let name = "Himanshi"
    console.log(name)
})();  // ; is mendatory in this otherwise futher no code will be executed

(() => {
    let name = "Saini"
    console.log(name)
})();

((name) => {
    console.log (`I am ${name}`)
})("Himanshi");