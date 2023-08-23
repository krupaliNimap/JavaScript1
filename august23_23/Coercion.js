let num1 = null;
let num2 = "9";
let num3 = "upo";
let num4 = 0;

console.log(`both truthy ${num2 || num3}`);
console.log(`first falsy second truthy ${num1 || num3}`);
console.log(`first truthy second falsy ${num3 || num1}`);
console.log(`first falsy second falsy ${num4 || num1}`);

console.log(typeof typeof NaN);
