//Automatically Global : Value assigned to a variable  without declaration will automatically become a global variable.
function myFunction(){
    firstName = 'Krupali'
}

console.log(firstName) // Not defined error 

myFunction()
console.log(firstName)
