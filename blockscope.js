//Block Scope: Variables declared inside a {} block cannot be accessed from outside world.
//Only for let and const
{
  var x = 10;
  let y = 20;
  const z = 30;
}
console.log(x); //Don't have block scope
console.log(y); //Will throw an error because of Block scope
console.log(z); //Will throw an error because of Block scope
