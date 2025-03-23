// the reason is that js object alwayse use string keys when storing properties and  JavaScript automatically converts object keys into strings
// in objects ({}), numeric keys are converted to strings, but the console hides the quotes to make it look cleaner.
const cache = {10:20}
cache[5]  = 5
console.log(cache)
console.log(cache['10'])

// in js , if obj key is valid indentifier , it means if key are variable then only you can you dot notation otherwize return error . 
// if obj keys are number or string based keys then you shoud use only bracket []
console.log(cache['5'],'5')
// console.log(cache.'10','unexpected indentifier') //indentifire expected

