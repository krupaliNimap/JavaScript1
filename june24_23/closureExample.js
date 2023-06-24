//Closure
function a() {
  let x = 4;
  function b() {
    x += 2;
    return x;
  }
  return b;
}
const y = a();
console.log(y());
console.log(y());
console.log(y());
