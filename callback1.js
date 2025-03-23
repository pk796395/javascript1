// callback is a function which take another function as an aruguments when initial function has compelted then execute callback fun at the appropriate time .
//callback function helps to handle asynchronous operation 
// callback execution flow (once initial function is completen then only run inner function )
// callback are not explicity work as asynchronously . we have to made this aschronously using with promise , settimeout and event handlers 
//event loops ensure callback only run once asynchronous task is completed 
//callback occurs when too many nested callback make hrad to read ,maintain , complex to manage and debug , 
// promise and async and wait is comes in picture to make readable to handle asynchronous task 
//callback avoid block execution and helps to make non block execution 
// when you need to run function later then use callback and use callback with handle async task like event handlers ,api call ,settimeout 
// use callback also with hoc to make function reusabe ,flexible and  update specific state base don previous value 

// callback helps to handle response of promise (.then..catch)
// callback wait for user intraction before function execution on events 
// callback wait for the delay the execution of function in the case of settimeout and interval , function is schedule but not executed once time is over then only executed 
// callback works with higher order function as synchronously , helps to make resualable function and modify each element 
// callback helps to modify specific state based on previous state value 
// in custom higher order function , callback heps to make resuable and flexible function 

function getUser(callback1,callback2){
    setTimeout(()=>{
        const user = {userId:1,name:'aarti'}
        callback1(user.userId)
        callback2(user)
    },1000)
}

function getUserId(id){
// throw new Error(' faled to get user id ')
console.log(id,'id')
}

function displayUser(user){
console.log(`fetch user sucessfully ${user.name} `)
}

// you can pass function here in three ways 1 directly pass the function 2 make callback function 3 use annonyomous function with function keyword 
getUser(getUserId,displayUser)