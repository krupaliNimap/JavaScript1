let c = [9, 9, 8, 9, 7, 6, 5, 5, 4, 3, 2, 1];
let d = [];
let temp = {};
let sum = 0;
for (let i = 0; i < c.length; i++) {
  if (!temp[c[i]]) {
    temp[c[i]] = 1;
    d.push(c[i]);
    sum += c[i];
  }
}
console.log(d, sum);
