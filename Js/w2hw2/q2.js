const prompt = require("prompt-sync")()
const input=prompt('Enter something     ')
x=true
const arr=['a','b','c','d','e','f','g','g',1,1,2,3,4,5,6,7,8,9]
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==input){
    console.log('value is '+ arr[i]);
    console.log('position is '+ (i+1));
    x=false
    break
    }
}
if(x)
console.log(input+ " is not in this array");