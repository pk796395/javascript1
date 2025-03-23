//currying is a technique in js which takes multiple arguments one by returning new function for each arguments until
// all arguments are  required  (instead taking all of once)

//normal function 
// in normal case if we do not provide any arguments still returning other three arguments result now currying help to create one function 
// until we do not provide all the arguments do not execute that function when we want to create function each
//  function depend on other function execution that time we use currying 
function gettingUserDetails(name,email,phone,message){
return `my name is ${name} and email : ${email} . you can contact to me this number : ${phone} . my message is ${message}`
}
// console.log(gettingUserDetails('priyanka','pk796395@gmail.com','9773583040','i want to use your service'))

//with currying 
// All currying functions use closures, because they must "remember" previous arguments.
function getUserInfo(name){
    return function(email){
        return function (phone){
            return function (message){
                return `my name is ${name} and email : ${email} . you can contact to me this number : ${phone} . my message is ${message}`

            }
        }
    }
}
// console.log(getUserInfo('roshni')('roshni@gmail.com')('9773583040')('i want to use your service'))

//second way to write code above one
const simplestStructure = (name)=>(email)=>(phone)=>(message)=>`my name is ${name} and email : ${email} . you can contact to me this number : ${phone} . my message is ${message}`
console.log(simplestStructure('gungun')('gungun@gmail.com')('9876667876')('message'))

//real use case of currying 
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "Phone", category: "Electronics", price: 300 },
    { id: 3, name: "Shoes", category: "Fashion", price: 100 },
    { id: 4, name: "TV", category: "Electronics", price: 1200 },
  ];

  function filterProducts (category){
    return function (minPrice){
        return function (maxPrice){
          return products.filter(data=>data.category===category&&data.price<minPrice&&data.price<=maxPrice)
        }
    }
  }

  const filteredResult = filterProducts('Electronics')(400)(1200)
//   console.log(filteredResult,'filteredResult')
  const shortway  = (category)=>(minPrice)=>(maxPrice)=>products.filter(data=>data.category===category&&data.price<minPrice&&data.price<=maxPrice)
console.log(shortway('Electronics')(400)(1200),'short-way')