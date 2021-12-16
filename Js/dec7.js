// functions are reusable blocks of code that perform a task
// function myFunction (){
//     console.log("This is my Function");
// }
// function call or invoking a function
// myFunction()

// function sum(){
//     return 1+1
// }
// console.log(sum());

// let multi= (x,y) => x+y

// console.log(multi(2,3));

// add=(a,b)=> a+b
// console.log(add(5,5));

// var i=1
// let answer
// add=(a,b)=>a+b
// sub=(a,b)=>a-b
// mult=(a,b)=>a*b
// div=(a,b)=>a/b
// while (i<2) {
// console.log('Menu')
// console.log('1.Add');
// console.log('2.Subtract');
// console.log('3.Multiply');
// console.log('4.Divide');
// console.log('5.Exit');
// const prompt= require("prompt-sync")()
// let menu=Number(prompt('Input number from 1 to 5 '))
// let input1=Number(prompt('Input first number '))
// let input2=Number(prompt('Input second number '))
// if (isNaN(input1) || isNaN(input2))
//     console.log('Input numbers please. Try again');
// else{
//     switch(menu){
//     case 1:
//         answer=add(input1,input2)
//         console.log(`We are adding ${input1} and ${input2}. The result is ${answer}.`);
//         break
//     case 2:
//         answer=sub(input1,input2)
//         console.log(`We are subtracting ${input2} from ${input1}. The result is ${answer}.`);
//         break
//     case 3:
//         answer=mult(input1,input2)
//         console.log(`We are multiplying ${input1} and ${input2}. The result is ${answer}.`);
//         break
//     case 4:{
//         answer=div(input1,input2)
//         console.log(`We are dividing ${input1} by ${input2}. The result is ${answer}.`);
//         console.log(`If you want the remainder, it is ${input1%input2}.`);
//         break
//     }
//     case 5:
//         console.log('Exit');
//         i=3
//         break
//     default:
//         console.log('Invalid Option');
//         break
// }
// }
// }


// console.log(area(1));
// function area(r){
//     return r*r*Math.PI
// }
// let c=function (a,b){
//     return Math.sqrt(a*a+b*b)
// }
// console.log(c(3,4));
// const capit=str=>str.split(' ').map(x=>x.toUpperCase()).join(' ')
// const swapCase=str=>str.split(' ').map((x , i) =>{
//     if (i%2==0)
//     return capit(x)
//     else
//     return x
// })
// console.log(swapCase('this is crazy'))
// class DeveloperClass{
// 	constructor(name) {
//     this.name = name;
// 	}

// 	greet() {
//     console.log('hello');
//   }
//   introduce() {
//     console.log('Hello World, my name is ' this.name);
//   }
// }
  
// const thai = new DeveloperClass('Thai', 32);



// const a=()=>{
//     return 1+5
// }
// console.log(a())
// function b(num,cb) {
//     let x=cb()
//     return x+num
// }
// console.log(b(1,a))
// function c() {
//     return 1+5
// }
const personStore = {
    greet: function() {
      console.log('hello');
    }
  }
  
  function personFromPersonStore(name, age) {
      const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
  }
  
  const sandra = personFromPersonStore('Sandra', 26);
  
  // add code here
    personStore.introduce=function () {
    console.log(`Hi my name is ${this.name}.`)
    }
    
  
  
  // Uncomment this line to check your work!
  sandra.introduce();
  


