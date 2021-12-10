// var thing = ['table','chair','fan','sofa','arm','light','tv']
// var [a, ,b,c,d,...e]=thing
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(e);


// let person=
// {
//     fname:'John',
//     lname:'Smith',
//     address:'lazy town',
//     age:35,

//     fullName: function(){
//         person.age=45
//         return this.fname + this.lname
//     }
// }
// console.log(person.age+person.fullName());
// console.log(person.age);
const sum = (...x) => {
    const args = [...x];
    return args.reduce((a, b) => a + b, 0);
  }
console.log(sum(1,2,3));