//mfr : map filter reduce example

// Calculate median and mean
const input = [12, 46, 32, 64];
const arr = input.sort();
const output = arr.reduce(
  (acc, x) => {
    if (arr.length % 2 == 0) {
      acc.median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    } else {
      acc.median = arr[Math.floor(arr.length / 2)];
    }
    acc.mean += x / arr.length;
    return acc;
  },
  { mean: 0, median: 0 }
);
console.log(output);

//Get name initials
const input1 = "George Raymond Richard Martin";
const output2 = input1
  .split(" ")
  .map((x) => x[0])
  .join("");
console.log(output2);

//Age difference from the youngest and oldest
const input3 = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
const arr3 = input3.map((x) => x.age);
console.log([
  Math.min(...arr3),
  Math.max(...arr3),
  Math.max(...arr3) - Math.min(...arr3),
]);

// n! with map and reduce
const input4 = 6;
const arr4 = [];
let fact = 1;
for (let i = 1; i <= input4; i++) {
  arr4.push(i);
}
const output4 = arr4.reduce((acc, x) => {
  acc = acc * x;
  return acc;
});
console.log(output4);

// Count elements in array of arrays
const input5 = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
const arr5 = input5.flat();
const output5 = arr5.reduce((acc, x) => {
  if (acc[x]) {
    acc[x] = ++acc[x];
  } else {
    acc[x] = 1;
  }
  return acc;
}, {});

console.log(output5);

// High performing students
// output: [
//   { name: 'Jack', average: 100 }
// ]
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] },
];

//Sum of every positive element
const input7 = [1, -4, 12, 0, -3, 29, -150];
const output7 = input7.reduce((acc, x) => {
  if (x > 0) {
    acc += x;
  } else {
    acc = acc;
  }
  return acc;
});

const output8 = input7.reduce((acc, current) => {
  let acc1 = 0;
  let current1 = 0;
  let abc = 0;
  if (acc > 0) {
    acc1 = acc;
  } else {
    acc1 = 0;
  }
  if (current > 0) {
    current1 = current;
  } else {
    current1 = 0;
  }
  abc = current1 + acc1;

  return abc;
});
console.log(output7, "output7");
