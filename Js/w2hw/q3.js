const prompt= require("prompt-sync")()
let input=prompt('Input is ')
let str='this is a random string please dont dig more into it'
let regex= new RegExp(input,'gi')
let newStr=str.match(regex,'')
newStr===null ? count=0:count=newStr.length;
console.log(`The number of time your input appear is ${count}.`);