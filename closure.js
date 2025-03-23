// closure is a function that retain to access the variable from outer scope /parent scope even after outer function has returned 
// closure is created when inner function is defined  inside an outer  function 

//In Js  Each function create its own  lexical environment meaning inner function retain  the reffrence of outer function variable rather than copying them .
//this allow inner function to modify and use those variavle even after outer function is executed .

//  it always looking for variable is accesed from own scope  , inner function has access to variable from outer function even outer function has returned 
// closure helps javascript where the function is exits and start .
// unless you are not writting console.log when you are returning anything and you are not getting return output in console you will not see anything when you call function 


function outerScope(){
let counter = 0

    return function(){
       counter++
// console.log(counter,'counter')
// return counter
// return console.log(counter,'counter')
    }
}

const store = outerScope()
store()
store()
store()
store()
store()
store()


//when you are calling outerscope1 function directly without storing return value in variable that time 
// you are creating new instance of function each time .so counter reset to to 0 every time that's why it prints 1 instead of increasing 
function outerScope1(){
    let counter = 0
    
        return function(){
           counter++
    // return console.log(counter,'without store in any variable and return 1 four times instead of increasing counter by 1')
        }
    }
    
     outerScope1()()
     outerScope1()()
     outerScope1()()
     outerScope1()()
   
     //1 data encapsulation (private variable ) ,closure helps in craeting private variable that means variable are not accessible from outside of function (counter )
//3 Closures allow us to retain access to variables even after an event is triggered.(when we click on button and inc by 1 on every click)
     //2 memorization caching ,closure are used to computed store values and optimize performance 

     function memorization(){
      const cache = {}
        return function(num){
           if(cache[num]){
            console.log('fetching from cache ')
            return cache[num]
           }

        console.log('calculating result')
        cache[num] = num*2
          console.log(cache,'cache')   
        return cache[num]
        }
     }

     const storeMemorization = memorization()
  console.log(storeMemorization(5))
  console.log(storeMemorization(5))
  console.log(storeMemorization(5))


  //(settimeout and setinveral )Closures help maintain the reference of variables in delayed function execution.
  function delayedMessage(message, delay) {
    return function () {
        setTimeout(() => {
            console.log(message);
        }, delay);
    };
}

const sayHello = delayedMessage("Hello, world!", 2000);
sayHello(); // Logs "Hello, world!" after 2 seconds






// ************  counter return single function , not series of function taking one argument at one time , it does not break down function into smaller part which takes single argument each 
//ot all closures are currying, because many closures (like the counter function) do not follow the pattern of returning functions for each argument.