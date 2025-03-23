// asynchronous tasks depend on each other,callbacks lead to nested, hard-to-read code, known as callback hell.
//nested structure make it difficult to maintain and debug 

// function firstTask(callback){
//     setTimeout(()=>{
//         callback()
//         console.log('first task has completed')
//     },1000)
// }

// function secondTask(callback){
//     setTimeout(()=>{
//         callback()
//         console.log('second task has completed')
//     },1000)
// }

// function thirdTask(callback){
//     setTimeout(()=>{
       
//         console.log('third task has completed')
//         callback()
//     },1000)
// }

// firstTask(()=>{
//     console.log('callback receved 1')
//     secondTask(()=>{
//         console.log('callback receved 2') 
//         thirdTask(()=>{
//             console.log('callback receved 3') 
//         })
//     })
// // })

// firstTask(function(){
//     secondTask(function(){
//         thirdTask(function(){
//            console.log('all task has complted ') 
//         })
//     })
// })

// function firstTask() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("First Task Done");
//         resolve();
//       }, 1000);
//     });
//   }
  
//   function secondTask() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Second Task Done");
//         resolve();
//       }, 1000);
//     });
//   }
  
//   function thirdTask() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Third Task Done");
//         resolve();
//       }, 1000);
//     });
//   }
  
//   // Using Promises
//   firstTask()
//     .then(secondTask)
//     .then(thirdTask)
//     .then(() => console.log("All Tasks Completed"));
  