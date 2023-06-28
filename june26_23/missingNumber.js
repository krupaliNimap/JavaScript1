// Find the missing number from unsorted array
let arr = [2, 7, 8, 5, 1, 4, 3, 6];
function missingNumber(arr) {
  let a = arr.length;
  let sum = 1;
  for (let i = 2; i <= a + a; i++) {
    sum = sum + i;
    sum = sum - arr[i - 2];
  }
  return sum;
}
console.log(missingNumber(arr));
