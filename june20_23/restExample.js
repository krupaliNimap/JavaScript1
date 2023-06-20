//rest example
function sum(...args) {
  let add = 0;
  for (let i of args) {
    add += i;
  }
  return add;
}
console.log(sum(1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10));
