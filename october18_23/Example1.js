const arr1 = [2, 1, 10, 4, 3].sort((a, b) => a - b); //[1,2,3,4,10]
const arr2 = [4, 2, 6, 1, 3].sort((a, b) => a - b); //[1,2,3,4,6]
const arr = [];
let sum1 = 0;
let sum2 = 0;
let diff = 0;
let item1 = 0;
let item2 = 0;
let temp = 0;
for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
  sum2 += arr2[i];
}
function abc(arr1, arr2, sum1, sum2) {
  diff = sum1 - sum2;
  let i = 0;
  while (arr1[i] < diff) {
    item1 = arr1[i];
    item2 = diff - item1;
    console.log(item1, item2);
    temp = arr2.find((item) => item === item2 && item <= item1);
    temp && arr.push([item1, temp]);
    i++;
  }
  console.log(sum1, sum2, diff, arr);
}
Math.max(sum1, sum2) === sum1
  ? abc(arr1, arr2, sum1, sum2)
  : abc(arr2, arr1, sum2, sum1);
