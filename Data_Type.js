//? *******************Methods of primitive************************

//? There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.


//? str.toUpperCase()    (capital karva mate)

// let str = "Hello";
// alert( str.toUpperCase() );       //* HELLO



//? toFixed(n)    (point pachi ketla number mukva ani mate)

// let n = 1.23456;
// alert( n.toFixed(2) ); // 1.23



//? &&&&&&&&&&&&&&&&&&&&&  Numbers &&&&&&&&&&&&&&&&&&&&

//? toString(base)  //koi pn value ne "**"(string) ni andar ave

// let num = 255;
// alert( num.toString(16) );      //* ff
// alert( num.toString(2) );       //* 11111111



//? Rounding(explain very well my book)

//         Math.floor	Math.ceil	Math.round	Math.trunc
// 3.1      3             4             3          3
// 3.5	     3             4             4          3
// 3.6	     3             4             4          3
// -1.1	   -2	           -1	        -1	       -1
// -1.5	    -2	           -1	        -1	       -1
// -1.6	    -2	           -1	        -2	       -1

//math.round ma 5 hoy to koi farak na pade 5 thi motu hoy to add karvanu avu javascript ma rule che


//? Imprecise Calculation

// alert( 1e500 ); //* Infinity

// alert( 0.1 + 0.2 == 0.3 ); //* false

// alert( 0.1 + 0.2 ); //* 0.30000000000000004 (because convert binary to decimal so)



//? isFinite and isNaN
//? Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.(check karva greter than)
//? NaN represents an error.(NaN means not a number)

//? Number.isNaN and Number.isFinite methods are the more “strict” versions of isNaN and isFinite functions.
//? They do not autoconvert their argument into a number, but check if it belongs to the number type instead.


// alert( isNaN(NaN) );              //* true
// alert( isNaN("str") );            //* true

// alert( NaN === NaN );             //* false

// alert( isFinite("15") );          //* true
// alert( isFinite("str") );         //* false, because a special value: NaN
// alert( isFinite(Infinity) );      //* false, because a special value: Infinity


//? ParseInt and ParseFloat

// alert( parseInt('100px') );               //* 100
// alert( parseFloat('12.5em') );            //* 12.5

// alert( parseInt('12.3') );                //* 12, only the integer part is returned
// alert( parseFloat('12.3.4') );            //* 12.3, the second point stops the reading


//? Other Math function

// alert( Math.random() );                  //* 87564587000... (any random numbers)
// alert( Math.max(3, 5, -10, 0, 1) );      //* 5
// alert( Math.min(1, 2) );                 //* 1
// alert( Math.pow(2, 10) );                //* 2 in power 10 = 1024 (my book very nice understanding)





//? &&&&&&&&&&&&&&&&&&&&&  Strings &&&&&&&&&&&&&&&&&&&&


//? syntax
// let single = 'single-quoted';
// let double = "double-quoted";
// let backticks = `backticks`;


// function sum(a, b) {
//     return a + b;
//   }
//   alert(`1 + 2 = ${sum(1, 2)}.`);        //* 1 + 2 = 3


// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;
// alert(guestList);          //* a list of guests, multiple lines(output ma copy aj akhu guest valu avse)


// let guestList = "Guests:   //* Error: Unexpected token ILLEGAL* John";



//?-------------- special characters

// let guestList = "Guests:\n * John\n * Pete\n * Mary";
// alert(guestList);           //* a multiline list of guests, same as above



// let str1 = "Hello\nWorld";      //* two lines using a "newline symbol"
// //* two lines using a normal newline and backticks
// let str2 = `Hello
// World`;
// alert(str1 == str2);            //* true


//? String length

// alert( `My\n`.length );             //* 3


//?------------- Accessing characters

//? str.at(pos)(at e position par su che e check kare)

// let str = `Hello`;
// //* the first character
// alert( str[0] );               //* H
// alert( str.at(0) );            //* H
// //* the last character
// alert( str[str.length - 1] );  //* o
// alert( str.at(-1) );


// let str = `Hello`;
// alert( str[-2] );        //* undefined
// alert( str.at(-2) );     //* l

//? for...of(char har ek letter ne alag alag kare)

// for (let char of "Hello") {
//     alert(char);             //* H,e,l,l,o (char becomes "H", then "e", then "l" etc)
//   }


//? Strings are immutable(immutable means badlay ny)(Strings can’t be changed in JavaScript.)

// let str = 'Hi';
// str[0] = 'h';                //* error
// alert( str[0] );             //* doesn't work


//? toUpperCase() and toLowerCase()

// alert( 'Interface'.toUpperCase() );            //* INTERFACE
// alert( 'Interface'.toLowerCase() );            //* interface

// alert( 'Interface'[0].toLowerCase() );         //* 'i'


//? Searching for substring

//? str.indexOf(substr,pos)   // (word find karke deta hai index)

// let str = 'Widget with id';
// alert( str.indexOf('Widget') );      //* 0, because 'Widget' is found at the beginning
// alert( str.indexOf('widget') );      //* -1, not found, the search is case-sensitive
// alert( str.indexOf("id") );          //* 1, "id" is found at the position 1 (..idget with id)

// let str = 'Widget with id';          //*(count space atle 12 avya)
// alert( str.indexOf('id', 2) )       //* 12

//? str.LastIndexOf(substr,position) (પાછળથી શોધે છે)

// substr atle searchValue: જે value (substring) ને શોધવી છે.
//position atle fromIndex: (ઐચ્છિક) ક્યાંથી શોધવાનું શરૂ કરવું છે (પાછળથી શોધે છે).

// let sentence = "Hello world, welcome to the world of JavaScript.";
// let lastIndex = sentence.lastIndexOf("world");
// console.log(lastIndex);           //* Output: 31



//? includes(String ni andar chhe k ny a batave hoy true or false)

// alert( "Widget with id".includes("Widget") );      //* true
// alert( "Hello".includes("Bye") );                  //* false


//? startsWith  and endsWith

// alert( "Widget".startsWith("Wid") );             //* true, "Widget" starts with "Wid"
// alert( "Widget".endsWith("get") );               //* true, "Widget" ends with "get"



//?------------------Getting substring

//?There are 3 methods in JavaScript to get a substring: substring, substr and slice.

//? str.slice(start [, end])   // original array ma koi change na kare new array return kare
//? The slice() method is used to copy a part of an array (or string) into a new array, without 
//? changing the original one.
//? Returns the part of the string from start to (but not including) end.

// let str = "stringify";
// alert( str.slice(0, 5) );                    //* 'strin', the substring from 0 to 5 (not including 5)
// alert( str.slice(0, 1) );                    //* 's', from 0 to 1, but not including 1, so only character at 0


// let str = "stringify";
// alert( str.slice(2) );                       //* 'ringify', from the 2nd position till the end


// let str = "stringify";
//* start at the 4th position from the right, end at the 1st from the right
// alert( str.slice(-4, -1) );                  //* 'gif'



//? str.substring(start [, end])
//? Returns the part of the string between start and end (not including end).


// let str = "stringify";
// //* these are same for substring
// alert( str.substring(2, 6) );         //* "ring"
// alert( str.substring(6, 2) );         //* "ring"

// //* ...but not for slice:
// alert( str.slice(2, 6) );            //* "ring" (the same)
// alert( str.slice(6, 2) );            //* "" (an empty string)


//? str.substr(start [, length])
//? Returns the part of the string from start, with the given length.

// let str = "stringify";
// alert( str.substr(2, 4) );           //* 'ring', from the 2nd position get 4 characters


// let str = "stringify";
// alert( str.substr(-4, 2) );          //* 'gi', from the 4th position get 2 characters



// method	                   selects…	                                        negatives
// slice(start, end)	    from start to end (not including end)	            allows negatives
// substring(start, end)	between start and end (not including end)	      negative values mean 0
// substr(start, length)	from start get length characters	              allows negative start


//? Comparison String

// As we know from the chapter Comparisons, strings are compared character-by-character in alphabetical order.

// alert( 'a' > 'Z' );                         //* true
// alert( 'Österreich' > 'Zealand' );          //* true

//? str.codePointAt(pos)
// Returns a decimal number representing the code for the character at position pos.

//? String.fromCodePoint(code)
// Creates a character by its numeric code

//? str.trim() – removes (“trims”) spaces from the beginning and end of the string.
//? str.repeat(n) – repeats the string n times.



//? &&&&&&&&&&&&&&&&&&&&&  Arrays &&&&&&&&&&&&&&&&&&&&

// let arr = new Array();
// let arr = [];


// let fruits = ["Apple", "Orange", "Plum"];
// alert( fruits[0] );               //* Apple
// alert( fruits[1] );               //* Orange
// alert( fruits[2] );               //* Plum


//?add a new one to the array:
// fruits[3] = 'Lemon';               //* now ["Apple", "Orange", "Pear", "Lemon"]


// let fruits = ["Apple", "Orange", "Plum"];
// alert( fruits.length );            //* 3


// let fruits = ["Apple", "Orange", "Plum"];
// alert( fruits );                      //* Apple,Orange,Plum


// //* mix of values
// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// //* get the object at index 1 and then show its name
// alert( arr[1].name );      //* John
// //* get the function at index 3 and run it
// arr[3]();                  //* hello 


//?Get last elements with "at"

// let fruits = ["Apple", "Orange", "Plum"];
// alert( fruits[fruits.length-1] );           //* Plum


// let fruits = ["Apple", "Orange", "Plum"];(-1 che to 0 ny ave pachhal thi levanu atle)
//* same as fruits[fruits.length-1]
// alert( fruits.at(-1) );                     //* Plum



//? Methods pop/push,shift/unshift

//? ==== push (add the one last element)

// let fruits = ["Apple", "Orange"];
// fruits.push("Pear");
// alert( fruits );                            //* Apple, Orange, Pear


//? ==== pop (remove the one last element)

// let fruits = ["Apple", "Orange", "Pear"];
// alert( fruits.pop() );                     //* remove "Pear" and alert it
// alert( fruits );                           //* Apple, Orange


//? ==== unshift (add the one first element)

// let fruits = ["Orange", "Pear"];
// fruits.unshift('Apple');
// alert( fruits );                           //* Apple, Orange, Pear


//? ==== shift (remove the one first element)

// let fruits = ["Apple", "Orange", "Pear"];
// alert( fruits.shift() );                   //* remove Apple and alert it=
// alert( fruits );                           //* Orange, Pear


//?----Methods push and unshift can add multiple elements at once:

// let fruits = ["Apple"];
// fruits.push("Orange", "Peach");
// fruits.unshift("Pineapple", "Lemon");
// //* ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
// alert( fruits );


//? internals 

// let fruits = ["Banana"]
// let arr = fruits;                 //* copy by reference (two variables reference the same array)
// alert( arr === fruits );          //* true
// arr.push("Pear");                 //* modify the array by reference
// alert( fruits );                  //* Banana, Pear - 2 items now


// let fruits = [];                  //* make an array
// fruits[99999] = 5;                //* assign a property with the index far greater than its length
// fruits.age = 25;                  //* create a property with an arbitrary name


//? performance

// fruits.shift();                   //* take 1 element from the start
// fruits.pop();                     //* take 1 element from the end


//?--------Loops---------------


// let arr = ["Apple", "Orange", "Pear"];
// for (let i = 0; i < arr.length; i++) {
//   alert( arr[i] );
// }

//? for..of me value ayegi jaise (apple,grapes,orange) par for..in me string ka key like(0,1,2)

//?--for..of
// let fruits = ["Apple", "Orange", "Plum"];
// //* iterates over array elements
// for (let fruit of fruits) {
//   alert( fruit );
// }


//?--for..in
// let arr = ["Apple", "Orange", "Pear"];
// for (let key in arr) {
//   alert( arr[key] );        //* Apple, Orange, Pear
// }


//? Length

// isme asa hai ki fruit me already 123 hai aur 1 element means(apple) add kar rahe hai is liye 124 ata hai
// let fruits = [];
// fruits[123] = "Apple";
// alert( fruits.length );      //* 124


// let arr = [1, 2, 3, 4, 5];
// arr.length = 2;                   //* truncate to 2 elements
// alert( arr );                     //* [1, 2]
// arr.length = 5;                   //* return length back
// alert( arr[3] );                  //* undefined: the values do not return


//? new Array()

// let arr = new Array("Apple", "Pear", "etc");


// let arr = new Array(2);              //* will it create an array of [2] ?=
// alert( arr[0] );                     //* undefined! no elements.
// alert( arr.length );                 //* length 2


//? Multidemational Arrays

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   alert( matrix[0][1] );             //* 2, the second value of the first inner array


//? toString

// let arr = [1, 2, 3];
// alert( arr );                        //* 1,2,3
// alert( String(arr) === '1,2,3' );    //* true


// alert( [] + 1 );                      //* "1"
// alert( [1] + 1 );                     //* "11"
// alert( [1,2] + 1 );                   //* "1,21"


// alert( "" + 1 );                      //* "1"
// alert( "1" + 1 );                     //* "11"
// alert( "1,2" + 1 );                   //* "1,21"



//? Don't compare arrays with ==

// alert( [] == [] );                     //* false
// alert( [0] == [0] );                   //* false

// alert( 0 == [] );                      //* true
// alert('0' == [] );                     //* false


//* after [] was converted to ''
// alert( 0 == '' );                       //* true, as '' becomes converted to number 0
// alert('0' == '' );                      //* false, no type conversion, different strings

