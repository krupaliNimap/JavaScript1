let counter = 0;

function addFive() {
  let counter = 5;
  console.log(counter);
}
function addTwo() {
  counter += 2;
  console.log(counter);
}
console.log(counter);
addFive(counter); // what will this show in the console?
console.log(counter);
addTwo(counter); // what will this show in the console?
