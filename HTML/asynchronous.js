//synchronous
// let a=1+2
// let b=1+4
// let c=b-2
// console.log(c);

// setTimeOut()
let arr= ["Hello", "Its me", "I was wondering if after all these years you'd like to meet", "To go over everything", "They say that time's supposed to heal ya", "But I ain't done much healing", "Hello, can you hear me?", "I'm in California dreaming about who we used to be",
"When we were younger and free", "I've forgotten how it felt before the world fell at our feet",
"There's such a difference between us", "And a million miles",
"Hello from the other side", "I must've called a thousand times",
"To tell you I'm sorry for everything that I've done", "But when I call, you never seem to be home",
"Hello from the outside", "At least I can say that I've tried", "To tell you I'm sorry for breaking your heart",
"But it don't matter, it clearly doesn't tear you apart anymore",
"Hello, how are you?", "It's so typical of me to talk about myself, I'm sorry",
"I hope that you're well", "Did you ever make it out of that town where nothing ever happened?",
"It's no secret that the both of us are running out of time",
"So hello from the other side (Other side)", "I must've called a thousand times (Thousand times)",
"To tell you I'm sorry for everything that I've done", "But when I call, you never seem to be home",
"Hello from the outside (Outside)", "At least I can say that I've tried (I've tried)",
"To tell you I'm sorry for breaking your heart", "But it don't matter, it clearly doesn't tear you apart anymore",
"Ooh-ooh, anymore", "Ooh-ooh-ooh, anymore", "Ooh-ooh, anymore", "Anymore",
"Hello from the other side (Other side)", "I must've called a thousand times (Thousand times)",
"To tell you I'm sorry for everything that I've done", "But when I call, you never seem to be home",
"Hello from the outside (Outside)", "At least I can say that I've tried (I've tried)",
"To tell you I'm sorry for breaking your heart", "But it don't matter, it clearly doesn't tear you apart anymore"]
myCallBackFunc=str=>document.getElementById('p1').innerHTML=str
// const anotherCB=()=>document.getElementById('p2').innerHTML=`<iframe src="https://giphy.com/embed/Y2ZUWLrTy63j9T6qrK" width="800" height="800" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/brrr-money-printer-cranksy-Y2ZUWLrTy63j9T6qrK">via GIPHY</a></p>`
// const lastCB=()=>document.getElementById('p1').style.display="none"
for (let i=0;i<arr.length;i++){
    setTimeout(() => {myCallBackFunc(arr[i]) 
    }, 1000+i*1000);
}

// setTimeout(() => {myCallBackFunc(arr[0])
    
// }, 1000);
// setTimeout(() => {myCallBackFunc(arr[1])
    
// }, 2000);
// setTimeout(() => {myCallBackFunc(arr[2])
    
// }, 3000);
// setTimeout(() => {myCallBackFunc(arr[3])
    
// }, 4000);
// setTimeout(() => {myCallBackFunc(arr[4])
    
// }, 5000);
// setTimeout(() => {myCallBackFunc(arr[5])
    
// }, 6000);
// setTimeout(() => {myCallBackFunc(arr[6])
    
// }, 7000);
// setTimeout(() => {myCallBackFunc(arr[7])
    
// }, 8000);
// setTimeout(() => {myCallBackFunc(arr[8])
    
// }, 9000)
// setTimeout(() => {myCallBackFunc(arr[9])
    
// }, 10000);
// setTimeout(() => {lastCB()
    
// }, 10500);
// setTimeout(() => {anotherCB()
    
// }, 11000);