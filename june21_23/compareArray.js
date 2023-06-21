const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10, 3, 7];
const arr3 = [];
const arr4 = arr1.concat(arr2);
for (let i of arr1) {
  for (let j of arr2) {
    if (i === j) {
      arr3.push(i);
    }
  }
}
//***************************/
// for (let k of arr4) {
//   for (let l of arr3) {
//     if (k === l) {
//       arr4.pop(k);
//     }
//   }
// }
console.log(arr3);
console.log(arr4);
