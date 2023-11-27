const num1 = 90;
const num2 = 80;
function abc(sum) {
  console.log(sum);
}
function bcd(a, b, abc) {
  let sum = a + b;
  abc(sum);
}
bcd(num1, num2, abc);
