//##############################
// Converting Strings to numbers
//##############################

/**
 * parseInt() and parseFloat() : Convert numerical strings to numbers
 * 
 * toString() : Convert numbers to numerical strings
 */
 console.log(parseInt("10")); // Convert 10 from String to Int 
 console.log(parseFloat("10.04")); // Convert 10.04 from String to Float
 console.log(parseInt("ABC")); // Convert ABC from String to Int 

 // Convert using template literals 
 console.log(parseInt(`${ 1 + 1 }`));

 // Numbers after Special characters are ignored
 console.log(parseInt("1.5")); // Convert 1.5 from String to Int 
 console.log(parseInt("1 + 1")); // Convert from String to Int

 console.log((10).toString()); // Convert Integer to String
 console.log((10.04).toString()); // Convert Float to String