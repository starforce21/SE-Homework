let numOfLetter
let numofNumber
const prompt= require("prompt-sync")()
let input=prompt('Input is ')
let letter=input.match(/[a-z]/gi)
letter===null ? numOfLetter=0:numOfLetter=letter.length;
let number=input.match(/[\d]/g)
number===null ? numofNumber=0:numofNumber=number.length;
let numChar=input.length-numofNumber-numOfLetter;
console.log(`There is ${numOfLetter} of letter. There is ${numofNumber} of number. There is ${numChar} of special character.`);