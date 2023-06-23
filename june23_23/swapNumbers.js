let number1 = 4;
let number2 = 5;
// console.log(number1, number2);
// [number1, number2] = [number2, number1];
// console.log(number1, number2);

//Second Method
number1 = number1 + number2;
number2 = number1 - number2;
number1 = number1 - number2;
console.log(number1, number2);
