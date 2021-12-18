let boroughArray=['Brooklyn','Manhattan','Queens','Bronx','Staten Island']
const makeButton=()=>{
    let start='<input type="text" id="input1">'
    boroughArray.map(x=>start+=`<button class="b1" onclick="clickFunction('${x}',agency)">${x}</button>`)
    document.getElementById('div1').innerHTML=start
}
makeButton()
let numDisp=document.getElementById('input1').value
const resultDiv2=document.getElementById('div2')
let resolution=[]
const injectIt=(index)=>{
    document.getElementById(`d${index}`).innerHTML=resolution[index]
}
const byName=(Arr)=>{
    Arr.sort((a,b)=>{
    var nameA = a.descriptor.toUpperCase()
    var nameB = b.descriptor.toUpperCase()
    if (nameA < nameB)
        return -1;
    if (nameA > nameB)
        return 1;
    return 0;
    })
}
let descArr
let agency='NYPD'
const clickFunction=(borough,agency)=>{
    const url=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=${agency}&borough=${borough.toUpperCase()}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        desctext='<table>'
        resolution=[]
        descArr=[]
        if(numDisp=='')
            numDisp=10;
        for (let i = 0; i < numDisp; i++) {
            descArr[i]={descriptor:data[i].descriptor,resolution_description:data[i].resolution_description}
            byName(descArr)
        }
        for (let i = 0; i < numDisp; i++) {
            desctext+=`<tr><td><span>${descArr[i].descriptor}</span></td><td><button class="b2" onclick='injectIt(${i})'>What did the police do</button></td></tr><td class="resolution" id="d${i}"></td>`
            resolution[i]=descArr[i].resolution_description
        }
        desctext+='</table>'
        resultDiv2.innerHTML=desctext
    })
    .catch((error)=>{
        console.log(error);
    })
}

let dispComplain=()=>{
newDescArr=descArr.map(x=>x.descriptor)
let j=0
let result=[]
while (newDescArr.length>0) {
    let currentLength=newDescArr.length
    let currentComplain=newDescArr[0]
    newDescArr=newDescArr.filter(x=>newDescArr[0]!=x)
    result[j]={complain:currentComplain,numOfComplain:currentLength-newDescArr.length}
    console.log(newDescArr);
    j++
}
finalText=''
for (let a = 0; a < result.length; a++) {
    finalText+='There is '+result[a].numOfComplain+' '+result[a].complain+' complain <br>'
}
document.getElementById('p1').innerHTML=finalText
}
