let str = "Krupali Atkari"; //output : ilapurk iraktaconst
arr1 = str.split(" ");
let str2 = "";
for (let i = 0; i < arr1.length; i++) {
  const arr2 = arr1[i].split("").reduce((acc, item) => {
    return item + acc;
  }, "");
  str2 += arr2 + " ";
}
console.log(str2);
