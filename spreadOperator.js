

const arr =  [1,2]
const arr1 = [3,4]
const arr3 = [...arr,...arr1]
arr3[1] = 5
// console.log(arr3)
// console.log(arr,'arr')

const arr4 = arr  // pass thr memory reffrence 
arr4[0] = 7
// console.log(arr4===arr,'true ') 
// console.log(arr,'7')
// console.log(arr4,'7')


const obj = {name:'priyanka',age:22}
const obj1 = obj
obj.name = "gungun"
// console.log(obj,'obj')
// console.log(obj1,'obj1')
//const obj3 = [...obj]  // obj is not itirable 
// console.log(obj3 ,'obj3')
const obj4 = {...obj}
obj4.name = "sunali"
console.log(obj4 ,'obj4')
console.log(obj,'obj') // this will not change name because spread operator behave different in obj case they use obj.assign under the hood only copy the key value pair not copy of their reffrence 