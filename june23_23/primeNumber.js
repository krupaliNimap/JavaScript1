let number = 1;
let arr = [];
function primeNumber(x) {
  if (x === 1) {
    console.log("Not a Prime Number.");
  }
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      arr.push(i);
    } else {
      continue;
    }
  }
  if (arr.length > 2) {
    console.log("Not a prime Number.");
  } else {
    console.log("Is a prime Number.");
  }
}
primeNumber(number);
