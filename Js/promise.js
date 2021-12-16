// let promise=new Promise((resolve,reject)=>{
//     //executor (the producing code)
//     setTimeout(() => {
//         resolve('done')
//     }, 1000);
// })
// promise.then((str)=>console.log(str))

//resolve -if finished successfully with result being the value

//reject(error) if an error occurred, 'error is the error object

//.then is a method takes in 2 arguments
//first arugement/function it take runs the promise
//when it resolved. it can even take a second arugment
//funtion that runs when the promise is rejected
// and recieves the error

let promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(new Error('there is a error'))
    }, 1000);
})

// promise2.then(
//     result=>alert(result), //1st parameter doesnt run
//     error=>alert(error) //this is the reject parameter. not useful
// )
// promise2.catch(alert)

//would be same as
promise2.then(
    result=>alert(result), //1st parameter doesnt run
).catch(alert)