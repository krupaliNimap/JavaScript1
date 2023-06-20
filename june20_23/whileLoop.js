// //while loop
const arr = ["Hello", "world", "wold", "Hello"];
let len = arr.length;
let count = 0;
while (len > 0) {
  len--;
  count++;
}
console.log("While Loop " + count);

//do...while loop
let sum = 0;
console.log("Do while Loop");
do {
  if (sum % 5 == 0) {
    console.log(sum);
  }
  sum += 1;
} while (sum <= 20);
