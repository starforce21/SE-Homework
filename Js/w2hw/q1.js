const prompt= require("prompt-sync")()
let input=prompt('Input is ')
let input2=input.toLowerCase()
let newStr=input.split("").reverse().join("");
let input3=newStr.toLowerCase()
input2===input3 ? console.log(input+' is Palindrome'):console.log(input+' is not Palindrome');