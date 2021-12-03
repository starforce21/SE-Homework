// const prompt= require("prompt-sync")()
// let input=prompt('Input is ')
// let b=input.length
// let c=b
// let d=0
// while (d<b) {
//     console.log(input.charAt(d));
//     d++
//     c--
// }


// const prompt= require("prompt-sync")()
// let input=prompt('Input is ')
// let newStr=input.split("").reverse().join("");
// newStr===input ? console.log(input+' is Palindrome'):console.log(input+' is not Palindrome');



let str='hello'
(str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
