let str =
  "                jasdui          ahsdknhd               sdnksdn           ";
let str2 = str.trim().split(" ");
let str3 = str2
  .reduce((acc, item) => {
    item !== "" && acc.push(item);
    return acc;
  }, [])
  .join(" ");
console.log(str3);
