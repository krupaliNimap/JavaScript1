let str = "jiojdfioj jsiofjdio jiosj 9809jijiojj";
let arr = [];
let word = "";
for (let i = str.length - 1; i >= 0; i--) {
  if (str[i] === " ") {
    arr.push(word);
    word = "";
  }
  word += str[i];
}
console.log(arr[0].length);
