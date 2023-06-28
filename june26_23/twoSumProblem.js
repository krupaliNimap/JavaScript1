// Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)
let arr = [1, 2, 3, 4, 6, 7, 8, 9];
let output = [];
function twoSumProblem(target) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (i === j) {
        j++;
      } else if (arr[i] + arr[j] === target) {
        output.push([arr[i], arr[j]]);
      } else {
        continue;
      }
    }
  }
  console.log(output);
}

twoSumProblem(9);
