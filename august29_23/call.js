let name1 = {
  firstName: "Krupali",
  lastName: "Atkari",
};
let name2 = {
  firstName: "Hello",
  lastName: "World",
};
let printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};
printFullName.call(name1);
printFullName.call(name2);
