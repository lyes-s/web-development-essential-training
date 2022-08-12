//#######################################
// Handling Errors with Try/Catch/Finally
//#######################################

/**
 * Exception : Interuption in the intended execution of code
 * 
 * Error :  Unintended interruption in execution of code, typically show up as execptions
 *          Sybntax errors are a type of execption that occurs when incorrect syntax is used
 * 
 * Throwing an Exeption :   Sending a message that somewthing has fonme wrong in the intendex execution of code
 *                          can be thrown by JavaScript or by the developer with the throw keyword
 */
 
 function divFunction(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('The arguments must be a number');
      }
    return x/y;
}

try {
    let y = divFunction (1, 'a');
    console.log(y);
} catch (error) {
    console.log(`${error}`);
} finally{
    console.log("Operation Completed !");
}