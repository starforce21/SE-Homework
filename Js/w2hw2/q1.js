// arr=[1,2,3,4,5,6,7,8,9,10]
// let output=0
// for (let i = 0; i < arr.length; i++) {
//     output+=Number(arr[i])
// }
// console.log(output);
arr=[1,2,3,4,5,6,7,8,9,10]
const add=arr=>arr.reduce((x,y)=>x+y,0)
console.log(add(arr));