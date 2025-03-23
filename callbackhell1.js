//asynchronous task depend on each other , callback lead to nested , hard to read code and debug and maintain 
//callback hell occurs when too many nested function make in order to execute in series . 

// function firstTask(callback){
//     setTimeout(()=>{
//         callback()
//         console.log('first task has completed 2')
//     },1000)
// }

// function secondTask(callback){
//     setTimeout(()=>{
//         callback()
//         console.log('second task has completed 4')
//     },1000)
// }

// function thirdTask(callback){
//     setTimeout(()=>{
//         callback()
//         console.log('third task has completed 6')
//     },1000)
// }
// first way to achieve this 

// function thirdCallback(){
//     console.log("callback3 5")
// }
// function secondCallback(){
//     console.log("callback2 3")
//     thirdTask(thirdCallback)
// }
// function firstCallback(){
//     console.log("callback1 1")
//     secondTask(secondCallback)
// }

// firstTask(firstCallback)

// second  way to achieve this 
// firstTask(()=>{
//     console.log("callback1 1")
//         secondTask(()=>{
//             console.log("callback1 3")   
//             thirdTask(()=>{
//                 console.log("callback1 5")   
//             }) 
//         }) 
// })


// it is not good way to call function this way . it is very difficult to manage and debug . that's why we will use promise to achive this 
// function firstTask(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve()
//             console.log('first task has completed 2')
//         },1000)
//     })
 
// }

// function secondTask(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("secon task has rejected ")
//             console.log('second task has completed 4')
//         },1000)
//     })

// }

// function thirdTask(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve()
//             console.log('third task has completed 6')
//         },1000)
//     })
  
// }

// firstTask().then(secondTask).then(secondTask).then(thirdTask).then(()=>console.log('finally all task has completed')).catch(error=>console.log(error,'error'))
// If you want to continue execution even if one step fails, use .catch() for individual steps:
// firstTask()
//   .then(secondTask)
//   .catch(error => {
//       console.log("Error in second task, but continuing...");
//       return thirdTask();  // Continue with thirdTask even after failure
//   })
//   .then(() => console.log("finally all task has completed"))
//   .catch(error => console.log(error, "final error"));

//in callback system  each function  manually handle errors while in promise automatically propagate error in nearest catch making handling clearer 
// stop execution on error 
// in callback error does not always stop execution unless you are explicity chek for it 
//in promise if one then fails (none of the following ) then function will execute 





//how do we manually handle error in callback function 

function firstTask(callback){
    setTimeout(()=>{
        console.log('first function has completed ')
callback(null)
    },1000)
}

function secondTask(callback){
    setTimeout(()=>{
        console.log('second task failed ')
callback("Error in secondTask")
    },1000)
}
function thirdTask(callback){
    setTimeout(()=>{
        console.log('third function has completed ')
callback(null)
    },1000)
}

firstTask((err)=>{
   
    if(err){
     return 
    }
secondTask((err)=>{

    if(err){
        return 
       }
       thirdTask((err)=>{

        if(err){
            return 
           }
    })
})

})