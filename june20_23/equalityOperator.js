var a = 1;
var b = 1;
console.log(a == b); // true
console.log(a === b);
var c = 10;
var d = "10";
console.log(c == d); // true
console.log(c === d);

const name1 = {
  first_name: "sarah",
};

const name2 = {
  first_name: "sarah",
};

console.log(name1.first_name == name2.first_name);
console.log(name1.first_name === name2.first_name);
console.log(name1 == name2);
console.log(name1 === name2);
console.log("\n");
console.log(Object.is(90, 70));
console.log(0 === -0);
console.log(0 == -0);
console.log("\n");
let check = { a: 100 };
console.log(Object.is(check.a, check.a));
