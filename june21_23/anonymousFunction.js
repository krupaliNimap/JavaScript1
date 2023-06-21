function myFunction() {
  let a = 12,
    b = 12;
  let abc = function (c, d) {
    return c + d;
  };
  let e = abc(a, b);
  return [a, b, e];
}
console.log("Anonymous Function");
var d = myFunction();
console.log(d);

// Anonymous self-invoking Function
(function (f, g) {
  h = f + g;
  console.log("Anonymous self-invoking Function");
  console.log(h);
  console.log(d);
})(1, 2);
