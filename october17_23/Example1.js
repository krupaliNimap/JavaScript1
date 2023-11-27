const abc = "Hello World@    -";
let a = 0;
let b = 0;
for (let i = 0; i < abc.length; i++) {
  if (abc[i] >= "A" && abc[i] <= "Z") {
    a++;
  }
  if (abc[i] >= "a" && abc[i] <= "z") {
    b++;
  }
}

console.log(a, b);
