let boroughArray=['Brooklyn','Manhattan','Queens','Bronx','Staten Island']
const makeButton=()=>{
    let start='<input type="text" id="input1">'
    boroughArray.map(x=>start+=`<button class="b1" onclick="clickFunction('${x}',agency)">${x}</button>`)
    document.getElementById('div1').innerHTML=start
}
makeButton()
const input1=document.getElementById('input1')
const resultDiv2=document.getElementById('div2')
let resolution=[]
const injectIt=(index)=>{
    document.getElementById(`d${index}`).innerHTML=resolution[index]
}
let agency='NYPD'
const clickFunction=(borough,agency)=>{
    let numDisp=input1.value
    const url=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=${agency}&borough=${borough.toUpperCase()}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        desctext='<table>'
        resolution=[]
        if(numDisp=='')
            numDisp=10;
        for (let i = 0; i < numDisp; i++) {
            desctext+=`<tr><td>${data[i].descriptor}</td><td><button onclick='injectIt(${i})'>What did the police do</button></td></tr><td id="d${i}"></td>`
            resolution[i]=data[i].resolution_description
        }
        desctext+='</table>'
        resultDiv2.innerHTML=desctext
    })
    .catch((error)=>{
        console.log(error);
    })

}



// button2.addEventListener('click',()=>{
//     let numDisp=input1.value
//     const url=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=MANHATTAN`
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//         let descriptor=[]
//         desctext='<table>'
//         resolution=[]
//         if(numDisp=='')
//             numDisp=10;
//         console.log(numDisp);
//         for (let i = 0; i < numDisp; i++) {
//             descriptor+=data[i].descriptor
//             desctext+=`<tr><td>${data[i].descriptor}<button onclick='injectIt(${i})'>What did the police do</button></td></tr><td id="d${i}"></td>`
//             resolution[i]=data[i].resolution_description
//         }
//         desctext+='</table>'
//         resultDiv2.innerHTML=desctext
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// })



// button3.addEventListener('click',()=>{
//     let numDisp=input1.value
//     const url=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS`
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//         let descriptor=[]
//         desctext='<table>'
//         resolution=[]
//         if(numDisp=='')
//             numDisp=10;
//         console.log(numDisp);
//         for (let i = 0; i < numDisp; i++) {
//             descriptor+=data[i].descriptor
//             desctext+=`<tr><td>${data[i].descriptor}<button onclick='injectIt(${i})'>What did the police do</button></td></tr><td id="d${i}"></td>`
//             resolution[i]=data[i].resolution_description
//         }
//         desctext+='</table>'
//         resultDiv2.innerHTML=desctext
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// })



// button4.addEventListener('click',()=>{
//     let numDisp=input1.value
//     const url=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX`
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//         let descriptor=[]
//         desctext='<table>'
//         resolution=[]
//         if(numDisp=='')
//             numDisp=10;
//         console.log(numDisp);
//         for (let i = 0; i < numDisp; i++) {
//             descriptor+=data[i].descriptor
//             desctext+=`<tr><td>${data[i].descriptor}<button onclick='injectIt(${i})'>What did the police do</button></td></tr><td id="d${i}"></td>`
//             resolution[i]=data[i].resolution_description
//         }
//         desctext+='</table>'
//         resultDiv2.innerHTML=desctext
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// })

// button5.addEventListener('click',()=>{
//     let numDisp=input1.value
//     const url=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=STATEN ISLAND`
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//         let descriptor=[]
//         desctext='<table>'
//         resolution=[]
//         if(numDisp=='')
//             numDisp=10;
//         console.log(numDisp);
//         for (let i = 0; i < numDisp; i++) {
//             descriptor+=data[i].descriptor
//             desctext+=`<tr><td>${data[i].descriptor}<button onclick='injectIt(${i})'>What did the police do</button></td></tr><td id="d${i}"></td>`
//             resolution[i]=data[i].resolution_description
//         }
//         desctext+='</table>'
//         resultDiv2.innerHTML=desctext
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// })
