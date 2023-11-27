let c = "a nik aik ioio";
// let a = c.split(" ").join("")
let a = "";
for (let i = 0; i < c.length; i++) {
  if (c[i] !== " ") {
    a += c[i];
  }
}
let d = {};
let b = "";
for (let i = 0; i < a.length; i++) {
  if (!d[a[i]]) {
    d[a[i]] = 1;
  } else {
    d[a[i]] += 1;
  }
}
for (let [i, j] of Object.entries(d)) {
  b = b + i + j;
}
console.log(b);
