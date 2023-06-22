const arr = [
  { firstName: "Krupali", age: 1 },
  { firstName: "Riya", age: 5 },
  { firstName: "Neha", age: 5 },
  { firstName: "Jiya", age: 7 },
];
const output1 = arr.map((x) => x.firstName + " " + x.age);
console.log(output1);

const output2 = arr.filter((x) => x.age < 6).map((x) => x.firstName);
console.log(output2);
