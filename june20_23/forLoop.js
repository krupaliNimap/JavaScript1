//With forEach
let sum = [];
let add = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
function myFunction(item) {
  add = item + item;
  sum.push(add);
}
console.log(sum);

//With for...in
let sum1 = [];
let add1 = 0;
const numbers1 = [65, 44, 12, 4];
for (let i in numbers1) {
  add1 = numbers1[i] + numbers1[i];
  sum1.push(add1);
}

console.log(sum1);

//With for...of
let sum2 = 0;
let add2 = [];
let numbers2 = [1, 2, 3, 4, 5];
for (let i of numbers2) {
  sum2 = i + i;
  add2.push(sum2);
}
console.log(add2);
