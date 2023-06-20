//In an object method, this refers to the object.

// let person1 = {
//     firstName : "Krupali",
//     lastName : "Atkari",
//     personAge : 21,
//     personDetail : function(){
//         console.log(this.firstName+this.lastName+this.personAge)
//     }
// }
// person1.personDetail()

//

let person2  = {firstName:'Krupali'};
function myFunction(){
    console.log(this.firstName)
}
myFunction()