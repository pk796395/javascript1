 
 function sound(){
    return `meow`
 }
 console.log( sound())  // function invoke and function execution 

  const cat_sound = sound  // pass the reffrence of function to this variable ,() ->pharenthesis
  console.log(cat_sound()) 

  const animail = {name:'cat',soundAnimal:sound}
  console.log(animail.soundAnimal()) 