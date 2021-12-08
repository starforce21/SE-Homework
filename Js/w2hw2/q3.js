arr=['wow','wowzer','crazy','random','longest','short','crazier','cracraz']
output=arr[0]
let newArr=[]
for (let i = 0; i < arr.length; i++) {
    if(output.length<arr[i].length)
    output=arr[i]
}
for (let i = 0; i < arr.length; i++) {
    if(output.length==arr[i].length)
    newArr.push(arr[i])
}

console.log('the longest element in this array is '+newArr);