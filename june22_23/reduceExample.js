const arr = [
  { firstName: "Krupali", age: 1 },
  { firstName: "Riya", age: 5 },
  { firstName: "Neha", age: 3 },
  { firstName: "Jiya", age: 9 },
];
const output = arr.reduce((acc, curr) => {
  if (curr.age > 2) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output);
