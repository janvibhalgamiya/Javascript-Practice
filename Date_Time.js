//? Date and Time

//? creation 

// let now = new Date();
// alert( now );                  //* shows current date/time


// //* 0 means 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// alert( Jan01_1970 );
// //* now add 24 hours, get 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// alert( Jan02_1970 );




//?Access Date components

// There are methods to access the year, month and so on from the Date object:

//* getFullYear()
// Get the year (4 digits)
//* getMonth()
// Get the month, from 0 to 11.
//* getDate()
// Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
//* getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Get the corresponding time components.
//* getDay()
// Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday,
//          in some countries that’s not so, but can’t be changed.



//*All the methods above return the components relative to the local time zone.

// There are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay().
//  Just insert the "UTC" right after "get".



//* Besides the given methods, there are two special ones that do not have a UTC-variant:

// getTime()
// Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.

// getTimezoneOffset()
// Returns the difference between UTC and the local time zone, in minutes:



 //* if you are in timezone UTC-1, outputs 60
 //* if you are in timezone UTC+3, outputs -180
// alert( new Date().getTimezoneOffset() );



//? Setting date components

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)



// let today = new Date();
// today.setHours(0);
// alert(today); //* still today, but the hour is changed to 0
// today.setHours(0, 0, 0, 0);
// alert(today); //* still today, now 00:00:00 sharp.


//? Autocorrection


// let date = new Date(2013, 0, 32);              //* 32 Jan 2013 ?!?
// alert(date);                                   //* ...is 1st Feb 2013!


// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);
// alert( date );                                 //* 1 Mar 2016


// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);
// alert( date );                                 //* shows the correct date


// let date = new Date(2016, 0, 2);               //* 2 Jan 2016
// date.setDate(1);                               //* set day 1 of month
// alert( date );
// date.setDate(0);                //* min day is 1, so the last day of the previous month is assumed
// alert( date );                                 //* 31 Dec 2015



//? Date to number,date diff

// let date = new Date();
// alert(+date);                                  //* the number of milliseconds, same as date.getTime()


// let start = new Date();                         //* start measuring time
// //* do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
// let end = new Date();                           //* end measuring time
// alert( `The loop took ${end - start} ms` );



//? Date.now()


// let start = Date.now();                            //* milliseconds count from 1 Jan 1970
// //* do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
// let end = Date.now();                               //* done
// alert( `The loop took ${end - start} ms` );         //* subtract numbers, not dates



//? Benchmarking


// function diffSubtract(date1, date2) {
//     return date2 - date1;
//   }
//   function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
//   }
//   function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
  
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
//   }
//   alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
//   alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );



// function diffSubtract(date1, date2) {
//     return date2 - date1;
//   }
//   function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
//   }
//   function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
  
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
//   }
//   let time1 = 0;
//   let time2 = 0;
//   //* run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
//   for (let i = 0; i < 10; i++) {
//     time1 += bench(diffSubtract);
//     time2 += bench(diffGetTime);
//   }
//   alert( 'Total time for diffSubtract: ' + time1 );
//   alert( 'Total time for diffGetTime: ' + time2 );




//? Date.parse 

// The method Date.parse(str) can read a date from a string.

// The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

//--> YYYY-MM-DD – is the date: year-month-day.
//--> The character "T" is used as the delimiter.
//--> HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
//--> The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.
//--> Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.

// The call to Date.parse(str) parses the string in the given format and returns the timestamp
//  (number of milliseconds from 1 Jan 1970 UTC+0).  If the format is invalid, returns NaN.


// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
// alert(ms);                                //* 1327611110417  (timestamp)


// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
// alert(date);

