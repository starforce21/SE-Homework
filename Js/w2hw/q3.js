let given='this is a random string please dont dig more into IT iT it It'
const prompt= require("prompt-sync")()
let input=prompt('Input is ')
let arr=given.split(' ')
time=arr.length
let num=0
for (let i = 0; i < time; i++) {
    if(arr[i].toLowerCase()==input.toLowerCase())
    num++
}
console.log(num);

// regexp

// const prompt= require("prompt-sync")()
// let input=prompt('Input is ')
// let str='this is a random string please dont dig more into it'
// let regex= new RegExp(input,'gi')
// let newStr=str.match(regex,'')
// newStr===null ? count=0:count=newStr.length;
// console.log(`The number of time your input appear is ${count}.`);