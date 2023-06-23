const str = "Hello World";
const arr = str.split("");
const output = arr.reduceRight((acc, x) => {
  acc += x;
  return acc;
}, "");
console.log(output);
