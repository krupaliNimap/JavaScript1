let number = 1895678;
let num = number;
let rem;
let reverse = 0;
while (num != 0) {
  rem = num % 10;
  reverse = rem + reverse * 10;
  num = Math.floor(num / 10);
}
console.log(reverse);
