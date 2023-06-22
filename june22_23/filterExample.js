const arr = [
  { firstName: "Krupali", age: 1 },
  { firstName: "Riya", age: 5 },
  { firstName: "Om", age: 3 },
  { firstName: "Jiya", age: 7 },
];

const output = arr.filter((x) => x.age < 5).map((x) => x.firstName);
console.log(output);

const output1 = arr.filter((x) => x.age < 5);
console.log(output1);

const arr1 = [1, 4, 7, 8, 5, 3, 9, 5];

const output2 = arr1
  .filter((x) => x <= 5)
  .reduce((add, x) => {
    add += x;
    return add;
  }, 0);

console.log(output2);
