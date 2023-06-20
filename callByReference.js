// In JavaScript, all objects interact by reference.
// If an object is stored in a variable and that variable is made equal to another
// variable then both of them occupy the same location in memory.
// Changes in one object variable affect the other object variable.
let val = {
    firstName : "Krupali"
};
let ref;
ref = val;
function myFunction(ref){
    ref.firstName="Hehe";
    console.log(ref)
}

myFunction(ref);
console.log(val);
