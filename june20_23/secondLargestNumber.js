const list = [21, 35, 1, 10, 34, 1, 35];
let large = 0;
let large1 = 0;
list.forEach(max);
function max(value) {
  if (large < value) {
    large = value;
  }
}
list.forEach(max1);
function max1(value) {
  if (large1 < value && value != large) {
    large1 = value;
  }
}
console.log(large1);
