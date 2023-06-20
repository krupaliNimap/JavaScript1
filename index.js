function myFunction() {
  var b = 10;
  function innerFunction() {
    console.log((b += 1));
    // return b;
  }
  return innerFunction;
}
// myFunction();
var abc = myFunction();
abc();
// function add() {
//   let sum = 10 + abc();
//   console.log("check-" + sum);
// }
// add();
con;
