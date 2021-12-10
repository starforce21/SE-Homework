arr=['wow','wowzer','crazy','longest','short','crazier','cracraz','dasdasd']
output=arr[0]
let newArr=[]
for (let i = 0; i < arr.length; i++) {
    if(output.length<arr[i].length)
    output=arr[i]
}
const filtered=arr=>arr.filter(x=>x.length==output.length)
// for (let i = 0; i < arr.length; i++) {
//     if(output.length==arr[i].length)
//     newArr.push(arr[i])
// }

console.log('the longest element in this array is '+filtered(arr));