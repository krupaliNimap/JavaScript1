let num1 = 0;
let num2 = 1;
let num = 5;
let fibo = [num1, num2];
for (let i = 3; i <= num; i++) {
  num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
  fibo.push(num3);
}
console.log(fibo);
