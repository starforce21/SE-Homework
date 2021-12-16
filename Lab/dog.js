const button=document.querySelector("button");
const breedInput=document.querySelector("input");
const imageDiv=document.querySelector("div");


button.addEventListener('click',()=>{
    let breed=breedInput.value
    console.log(breed);

    const url=`https://dog.ceo/api/breed/${breed}/images/random`

    fetch(url)
    .then(res=>res.json())// receives the reponse from the promise
    .then(data=>{
        let dogPic=data.message
        imageDiv.innerHTML=`<img src=${dogPic}>`
    })
    .catch((error)=>{
        console.log(error);
    })
})