//Function Scope: Variables declared inside a function are not  accessible(visible) from outside the function.
function myFunction(){
    var x = 10;
    let y = 20;
    const z = 30;
    console.log("Hello")
}
myFunction()
console.log(x) //error
console.log(y) //error
console.log(z) //error