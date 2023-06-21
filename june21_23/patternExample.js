let i = 5;
let a = 100;
while (i >= 1) {
  myFunction();
  i--;
}
function myFunction() {
  let s = "";
  let t = [];
  for (let j = 1; j <= 10; j++) {
    s += a + " ";
    a--;
  }
  console.log(s);
  for (let k = 10; k >= 1; k--) {
    t.unshift(a);
    b = t.join(" ");
    a--;
  }
  console.log(b);
}
