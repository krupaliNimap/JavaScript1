// Function arguments are always passed by value.
// It copies the value of a variable passed in a function to a local variable.
// Both these variables occupy separate locations in memory. Thus, if changes 
// are made in a particular variable it does not affect the other one.

// By function
let val = 5;
console.log("With function")
function callByValue(x){
    x = x + x;
    console.log(x);
}
callByValue(val);
console.log(val+"\n");

// By value (primitives)
console.log()
let a = 5;
let b;
b = a;
a = 3;
console.log(a);
console.log(b);