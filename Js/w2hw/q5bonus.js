const prompt= require("prompt-sync")()
let input=prompt('Input is ').split(' ')
let result=[]
for (let i = 0; i < input.length; i++) {
    let str=input[i]
    result[i]=str[0].toUpperCase()+str.slice(1)
}
console.log(result.join(' '));


// 5 with map function

// const prompt= require("prompt-sync")()
// let input=prompt('Input is ')
// arr=input.split(' ')
// word=arr.map(word => word[0].toUpperCase() + word.slice(1))
// console.log(word.join(' '))