//callback is a function which take another function as an arguments . when initial function has completed then call this function 
// at the appropriate time .

//Callbacks are not always asynchronous.it is not necessarry callback works as aschronousy if we are not using any event listener ,api call ,promise ,async task , web api 
//callbacks are not explicity behave aschronously unless we do not make asynchronously behaviour using with api call ,promise and event handlers 

//callback is used to handle asynchronous task in js 
//event loops ensure callback task only run after asynchronous task completed 
//callback occurs when too many nested  callback make the code hard to read ,maitain and debug 
//promise is more readable way to handle asynchronous task 

function sum(multiple,a,b){
    multiple(a,b)
    console.log(a+b,'sum')

  
}
function multiply(a,b){
return console.log(a*b,'multiply')
}

const result = sum(multiply,7,8)
// console.log(result,'function is not returning anything thatwhy return undefined here ')

// Now this runs asynchronously . They are only asynchronous if explicitly wrapped inside an asynchronous operation (e.g., setTimeout, API calls, Promises).

function sum1(multiple, a, b) {
    setTimeout(() => multiple(a, b), 0); 
    console.log(a + b, 'sum'); 
}

function multiply1(a, b) {
    console.log(a * b, 'multiply');
}

 sum1(multiply, 7, 8);


//  When Do We Use Callback Functions?

// 1 event listener : wait for the user intraction before execution , yes even are asynchronously behave 
// 2 promise fetch() then () : execute code after an api response 
// 3 settimeout and setinterval : delay execution without blocking the code 
// 4 highher order function (array method) : apply logic to each element dynamanically (but they are not async task here we call callback fun because want to make function resuable for each element )
// 5 State Updates in React (setState(prevState => prevState + 1)): when state update correctly when state depend on previous state (this is not asynchronous task still we use callback to update state correctly)
// 6 Custom Higher-Order Functions   : make function flexible and resuable 

// 7 callback avoid block execution and helps in non blocking execution
// 8 control execution flow run only another function has completed 

// Use callbacks when you need to run code later (events, async tasks, state updates).
//  Use callbacks to make functions reusable (higher-order functions like map, filter).

  // function getUserData(userId, callback) {
    //     console.log("Fetching user data...");
    //     setTimeout(() => {
    //         const user = { id: userId, name: "Pinka", email: "pinka@email.com" };
    //         console.log("User data fetched.");
    //         callback(user);
    //     }, 3000);
    // }
    
    // function displayUser(user) {
    //     console.log(`User Name: ${user.name}, Email: ${user.email}`);
    // }
    
    // // Calling function
    // getUserData(101, displayUser);