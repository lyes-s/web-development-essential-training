 /**
  * The Promise object represents the eventual completion (or failure) 
  * 
  * of an asynchronous operation and its resulting value.
  */

 function promiseTimeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
 }

 promiseTimeout(2000)
 .then(() => console.log("Done!"))
 .catch((error) => console.log("Exception Occured ", error))
 .finally(() => console.log("Execution Completed."));


 /**
  * Async/await for managing promises.
  * 
  * Async/Await is used to work with promises in asynchronous functions.
  */

async function run() {
  console.log("Start !!");
  await promiseTimeout(2000);
  console.log("DONE !!");
 }

run();


/**
 * A Promise in NodeJS is similar to a promise in real life. 
 * 
 * It is an assurance that something will be done. 
 * 
 * Promise is used to keep track of whether the asynchronous event has been executed or not and determines what happens after the event has occurred
 */
function helperPromise() {
   return new Promise((resolve, reject) => {
     const x = "geeksforgeeks";
     const y = "geeksforgeeks";
     x === y ? resolve("Strings are same") : reject("Strings are not same");
   });
 }

 async function demoPromise() {
   try {
     let message = await helperPromise();
     console.log(message);
   } catch (error) {
     console.log("Error: " + error);
   }
 }

 demoPromise();