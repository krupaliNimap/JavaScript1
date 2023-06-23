//
// for (let i = 0; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
console.log("Hello World");

for (var i = 0; i <= 5; i++) {
  function close(x) {
    setTimeout(() => {
      console.log(x);
    }, x * 1000);
  }
  close(i);
}

console.log("Welcome to javascript world");

for (var j = 0; j <= 4; j++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 2000 * j);
  })(j);
}
