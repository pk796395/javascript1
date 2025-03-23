
// 1  find the dublicate and unique and characterCount  with prebuild method or without prebuild method 

// without pre-build method 

const arr = [8,2,1,3,1,4,2,5,5,6,7,2,8,0]

function findDublicate(arr){
    const obj = {}
    const unique = []
    const dublicate = []

    for (let elem of arr){
        // if(obj[elem]>0){
        //     obj[elem] +=1
        // }else{
        //     obj[elem] = 1
        // }
        obj[elem] = (obj[elem]||0)+1
    }

    for (let key in obj){
        // if(obj[key]>1){
        //     dublicate.push(key)
        // }else{
        //     unique.push(key)
        // }
        obj[key]>1?dublicate.push(key): unique.push(key)
    }

// console.log(dublicate,'objdublicate')
// console.log(unique,'unique')
}
findDublicate(arr)


//with build method 
//... allow itirable to be expanded where are multiple argumnets in an array 
const unique1 = [...new Set(arr)]
const dublicate1 = arr.filter((curr,index,self)=>self.indexOf(curr)!==index) // [8,2,1,3,1,4,2,5,5,6,7,2,8,0]
// console.log(dublicate1,'dublicate1')


// 2 find the first character of word from the string 

const name = "priyanka kumari" // pk

const firstChar = name.split(" ").map((word)=>word[0]).join(" ")
console.log(firstChar,'firstChar')
