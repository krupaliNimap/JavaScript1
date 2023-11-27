// let num = "2277".split("").reverse();
// let sum = 0;
// let i = 0;
// let num2 = 7;
// do {
//   sum = (+num[i] + num2).toString();
//   console.log("hello", sum, i);
//   if (sum < 10) num[i] = sum;
//   else num[i] = sum[1];
//   num2 = +sum[0];
//   i++;
// } while (sum.length > 1);

// console.log(num.reverse());
let digits = [9, 9];
let num = digits.reverse();
let sum = 0;
let i = 0;
let num2 = 1;
do {
  sum = (+num[i] + num2).toString();
  console.log("hello", sum, i, digits);
  if (sum < 10) num[i] = sum;
  else if (isNaN(sum)) {
    num[i] = 1;
    console.log("sndcuibncjsdbcjhdbhju");
    break;
  } else num[i] = sum[1];
  num2 = +sum[0];
  i++;
} while (sum.length > 1);

console.log(num.reverse());
