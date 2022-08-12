//#######
// Dates
//#######

/**
 * One central object - Date
 * Contains both date and time
 */

 const date = new Date();
 const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
 console.log("Date : ", date.toLocaleDateString('en-us', options));
 
 const dateNow =  Date.now();
 console.log("Date.now : ", dateNow);
 
 const randomDate = new Date(2015, 3, 12, 6, 25, 58).toLocaleDateString();
 console.log("Random Date : ", randomDate);
 
 const win95Launch = new Date(1995, 7, 24).toLocaleDateString('en');
 console.log("Win 95 Launch Date : ", win95Launch);
 
 const now = new Date();
 now.setFullYear(2014);
 now.setMonth(3);
 now.setDate(4);
 now.setHours(4);
 now.setMinutes(24);
 now.setSeconds(46);
 
 console.log("Now Date : ", now);