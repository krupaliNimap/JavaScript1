//Temporal dead zone: When let and const are hoisted they are into their temporal dead zone.
// let e = 90;
// const f = 30;

//1.Reference Error: when we access let and const variable before its initialization.
// console.log(a);
// let a = 10;

//2.Reference Error : When variable is no where  in the code.
// console.log(x);

//1.SyntaxError : When let variable is redeclared.
// let b = 10;
// let b = 60;
// console.log(b);

//2.Syntax Error: When const is not initialized at the time of declaration.
// const c;
// console.log(c);

//Type error: When const variable is reassigned.
// const d = 30;
// d = 90;
// console.log(d);

//Example
let g = 12; //window.g = undefined
var h = 23; //window.h = 23
