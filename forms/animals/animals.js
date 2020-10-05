/*
//created new array named myAnimals
let myAnimals = ['dog', 'cat', 'horse', 'meerkat']

//get name of animal from user and add to the end of the array using array method & added code so user can use any mix of case to enter an animal name
let enter = prompt("Enter animal name in order to add it to the end of the array: ")
let newPet = enter.toLowerCase()
let newPet2 = enter.toUpperCase()
myAnimals.push(newPet)
myAnimals.push(newPet2)

//used myAnimals array given to show the last animal added
alert(`The animal that is last added in the array is a/an ${myAnimals.slice(-1)[0]}.`)
*/