//Write a code to bring all the zeros at the front
const num = 780890909;
let output = String(num)
  .split("")
  .reduce((acc, item) => {
    +item === 0 ? (acc = item + acc) : (acc += item);
    return acc;
  }, "");
console.log(output);
