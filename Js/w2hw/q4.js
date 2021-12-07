var i=1
while (i<2) {
console.log('Menu')
console.log('1.Add');
console.log('2.Subtract');
console.log('3.Multiply');
console.log('4.Divide');
console.log('5.Exit');
const prompt= require("prompt-sync")()
let menu=Number(prompt('Input number from 1 to 5 '))
let input1=Number(prompt('Input first number '))
let input2=Number(prompt('Input second number '))
if (isNaN(input1) || isNaN(input2))
    console.log('Input numbers please. Try again');
else{
    switch(menu){
    case 1:
        console.log(`We are adding ${input1} and ${input2}. The result is ${input1+input2}.`);
        break
    case 2:
        console.log(`We are subtracting ${input2} from ${input1}. The result is ${input1-input2}.`);
        break
    case 3:
        console.log(`We are multiplying ${input1} and ${input2}. The result is ${input1*input2}.`);
        break
    case 4:{
        console.log(`We are dividing ${input1} by ${input2}. The result is ${input1/input2}.`);
        console.log(`If you want the remainder, it is ${input1%input2}.`);
        break
    }
    case 5:
        console.log('Exit');
        i=3
        break
    default:
        console.log('Invalid Option');
        break
}
}
}