// 1

// const prompt= require("prompt-sync")()
// let input=prompt('Input is ')
// let newStr=input.split("").reverse().join("");
// newStr===input ? console.log(input+' is Palindrome'):console.log(input+' is not Palindrome');


// 2

// let numOfLetter
// let numofNumber
// const prompt= require("prompt-sync")()
// let input=prompt('Input is ')
// let letter=input.match(/[a-z]/gi)
// letter===null ? numOfLetter=0:numOfLetter=letter.length;
// let number=input.match(/[\d]/g)
// number===null ? numofNumber=0:numofNumber=number.length;
// let numChar=input.length-numofNumber-numOfLetter;
// console.log(`There is ${numOfLetter} of letter. There is ${numofNumber} of number. There is ${numChar} of special character.`);


// 3

// const prompt= require("prompt-sync")()
// let input=prompt('Input is ')
// let str='bruhbruhbruh'
// let regex= new RegExp(input,'gi')
// let count=str.match(regex,'').length
// console.log(count);

// 4

// const prompt= require("prompt-sync")()
// console.log('Menu')
// console.log('1.Add');
// console.log('2.Subtract');
// console.log('3.Multiply');
// console.log('4.Divide');
// console.log('5.Exit');
// let menu=Number(prompt('Input number from 1 to 5 '))
// let input1=Number(prompt('Input first number '))
// let input2=Number(prompt('Input second number '))
// if (isNaN(input1) || isNaN(input2))
//     console.log('Input numbers please. Try again');
// else{
//     switch(menu){
//     case 1:
//         console.log(`We are adding ${input1} and ${input2}. The result is ${input1+input2}.`);
//         break
//     case 2:
//         console.log(`We are subtracting ${input2} from ${input1}. The result is ${input1-input2}.`);
//         break
//     case 3:
//         console.log(`We are multiplying ${input1} and ${input2}. The result is ${input1*input2}.`);
//         break
//     case 4:{
//         console.log(`We are dividing ${input1} by ${input2}. The result is ${input1/input2}.`);
//         console.log(`If you want the remainder, it is ${input1%input2}.`);
//         break
//     }
//     case 5:
//         console.log('Exit');
//         break
//     default:
//         console.log('Invalid Option');
//         break
// }
// }


// 5

// const prompt= require("prompt-sync")()
// let input=prompt('Input is ')
// arr=input.split(' ')
// let result=[]
// for (let i = 0; i < arr.length; i++) {
//     let str=arr[i]
//     let newStr=str[0].toUpperCase()+str.slice(1)
//     result.push(newStr)
// }
// console.log(result.join(' '));


// 5 with map function

// const prompt= require("prompt-sync")()
// let input=prompt('Input is ')
// arr=input.split(' ')
// word=arr.map(word => word[0].toUpperCase() + word.slice(1))
// console.log(word.join(' '))