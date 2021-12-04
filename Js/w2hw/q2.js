const prompt= require("prompt-sync")()
let input=prompt('Input is ')
let input2=input.toLowerCase()
let time=input.length
let numOfnumber=0
let numOfletter=0
let numOfchar=0
for (let i = 0; i < time; i++) {
    if (input2.charCodeAt(i)>=48 && input2.charCodeAt(i)<=57)
    numOfnumber++
    else if (input2.charCodeAt(i)>=97 && input2.charCodeAt(i)<=122)
    numOfletter++
    else
    numOfchar++
}
console.log(`There is ${numOfletter} letters. There is ${numOfnumber} numbers. There is ${numOfchar} special characters.`)

// regexp

// let numOfLetter
// let numOfNumber
// const prompt= require("prompt-sync")()
// let input=prompt('Input is ')
// let letter=input.match(/[a-z]/gi)
// letter===null ? numOfLetter=0:numOfLetter=letter.length;
// let number=input.match(/[\d]/g)
// number===null ? numOfNumber=0:numOfNumber=number.length;
// let numChar=input.length-numOfNumber-numOfLetter;
// console.log(`There is ${numOfLetter} of letter. There is ${numOfNumber} of number. There is ${numChar} of special character.`);