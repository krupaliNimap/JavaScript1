const str = ("h#appy birthday to !you");
const array = str.split("")
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const wordList = str.split(" ");
const wordArrayList = wordList.map((item)=>{return item.split(specialChars).join("").split("").reverse().join("")})
const wordStr = wordArrayList.join("")
let acc = ""
let j = 0
for(let i = 0; i < array.length;i++){
  if(array[i]===" ") acc += " "
  else if(specialChars.test(array[i])){
    acc+=array[i]
  }
  else{
    acc+=wordStr[j]
    j++
  }
}
console.log("Output:",acc)
