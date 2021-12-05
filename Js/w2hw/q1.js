const prompt= require("prompt-sync")()
let input=prompt('Input is ')
let newStr=input.split("").reverse().join("");
input.toLowerCase()===newStr.toLowerCase() ? console.log(input+' is Palindrome'):console.log(input+' is not Palindrome');