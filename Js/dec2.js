// for(let i=0;i<=5;i++){
//     for(let j=0;j<i;j++){
//         console.log(i);
//     }
// }
// let a=1
// while (a<=5) {
//     let b=1
//     while (b<=a) {
//         process.stdout.write(b.toString());
//         b++;
//     }
//     console.log();
//     a++
// }
// let a="You're the best! Around! Nothing's ever gonna keep me down"
// let c='down'
// let b=a.includes(c)
// console.log(b)
// let a=65
// while (a<65+26) {
//     let b=String.fromCharCode(a)
//     console.log(b);
//     a++
//}


// const a= require("prompt-sync")()
// let b=a('Input is ')
// let c=b.length
// let d=1
// while (d<=c) {
//     console.log(b.charAt(d-1));
//     d++
// }



// const a='best'
// let b=a.length
// let c=b
// let d=1
// while (d<=b) {
//     console.log(a.charAt(c-1));
//     d++
//     c--
// }




// let a='aeiouAYhbnouiafsddabhuobvcuiadsybuoyiasdbnuionidsy'
// let b=a.length
// let y=a.toUpperCase()
// let d=0
// let e=0
// while (d<b) {
//     let x=y.charAt(d)
//     if (x=='A'||x=='E'||x=='I'||x=='O'||x=='U'||x=='Y')
//     e++
//     d++
// }
// console.log(e);

// let a='aeiou'
// let b=a.match(/[aeiouy]/gi).length
// console.log(b);

// stringTested='hjkfladshbfhkljdashdjklashkljklbdjkl'
// let prompt= require("prompt-sync")()
// userInput=prompt('Input is ')
// lengthOfString=stringTested.length
// d=1
// counter=0
// while (d<=lengthOfString) {
//     if(stringTested.charAt(d-1)==userInput){
//         counter++
//     }
//     d++
// }
// console.log(counter);

// cookiecost=4
// pay=100
// quarter=.25
// time=(pay-cookiecost)/quarter
// counter=0
// // while (int<=time) {
// //     int++
// //     counter++
// // }
// for (let i=1;i<=time;i++){
//     counter++
// }
// console.log(counter);
// arr=[]
// for  (let index = 1; index <= 5; index++) {
//     arr.push(index)
// }
// console.log(arr);

let prompt = require('prompt-sync')(); // created user input from console
let userInput = ""
let isNum = /^\d+$/.test(userInput);
let numbersUsed=[]
let product=1;
do{
    //console.log(userInput + " " + isNum)
    
    userInput = prompt("Enter your number to multiply: ")
    isNum = /^\d+$/.test(userInput)
    if(!isNum) {
        break;
    }
    numbersUsed.push(userInput)
    product *= Number(userInput)
}while(userInput!="" || isNum)
//console.log(userInput + " " + isNum)
console.log(`The product of numbers ${numbersUsed} is ${product}`)
