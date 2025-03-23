// **********************************async/await has a higher priority than .catch() in the microtask queue!

//promise is a object that represents complition and failure of ascynchronous task 
//promise has three status pending ,fullfilled , rejected  and has two parameter ressolve and reject 
//solve the issues of callback hell , async task : settimeout ,setinterval ,callback fun ,event handling , read file from server , perform i/o operation , fetching data 

const promise = new Promise((ressolve,reject)=>{
ressolve("data send successfully")
})

//console.log(promise)  // Promise {'data send successfully' }

const promise1 = new Promise((ressolve,reject)=>{
    setTimeout(()=>{
        // ressolve("data send successfully")
        reject("failed to send data ")
    },1000)
    
    })
    
    //console.log(promise1)  // Promise {<pending> } it does not wait for the result of settimeout fun and go on immediate on console that'why getting pending state
    
    const result = promise1 
    //console.log(result)  // Promise {<pending>} same as above

    const result1 = promise1.then(res=>res)
    //console.log(result1) // Promise {<pending>} same as above

    //. then wait for promise resolve unless promise is not ressolve it does not execute next function
    promise1.then(res=>console.log(res,'res')).catch((error)=>console.error(error,'error'))

    // in js async and wait are keyword to handle asynchronous operation , allow you to write code which look and behave like synchronous code 
// async function return promise this promise state can be either resolve or rejected and await pause/suspend  the function call  until promise is not ressolved for function execution

async function getData (){
    try{
        const result = await promise1
        console.log(result,'result')
    }catch(error){
console.warn(error,'error in catch block ')
}
     
}
getData ()

// diffrence between fetch and axios 
// 1 both are using to create http request 
// 2 fetch is pre-build browser functionality to make api call and axios is third party http client library 
// 3 fetch only handle network error while axios handle all type of error automatically 
//4 we have to manage custome response and parse json automatically 
// 5 we have to manually handle timeout in feching while axios provide prebuild features to manage timeout 


