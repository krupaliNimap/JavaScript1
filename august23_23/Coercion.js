let num1 = null;
let num2 = "9";
let num3 = "upo";
let num4 = 0;

//Boolean coersion
if (num1) {
  console.log("num1", num1);
} else {
  console.log("num2", num2);
}
console.log("-------------------------------");
if (num2) {
  console.log("num2", num2);
} else {
  console.log("num1", num1);
}
console.log("-------------------------------");

//Logical operator coercion
console.log(`both truthy ${num2 || num3}`);
console.log(`first falsy second truthy ${num1 || num3}`);
console.log(`first truthy second falsy ${num3 || num1}`);
console.log(`first falsy second falsy ${num4 || num1}`);
console.log("-------------------------------");

console.log(`both truthy ${num2 && num3}`);
console.log(`first falsy second truthy ${num1 && num3}`);
console.log(`first truthy second falsy ${num3 && num1}`);
console.log(`first falsy second falsy ${num4 && num1}`);
console.log("-------------------------------");
