//? *******************Methods of primitive************************

//? There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.


//? str.toUpperCase()    (capital karva mate)

// let str = "Hello";
// alert( str.toUpperCase() );       //* HELLO



//? toFixed(n)    (point pachi ketla number mukva ani mate)

// let n = 1.23456;
// alert( n.toFixed(2) ); // 1.23



//? &&&&&&&&&&&&&&&&&&&&&  Numbers &&&&&&&&&&&&&&&&&&&&

//? toString(base)

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

// alert( Math.random() );                  //* ... (any random numbers)
// alert( Math.max(3, 5, -10, 0, 1) );      //* 5
// alert( Math.min(1, 2) );                 //* 1
// alert( Math.pow(2, 10) );                //* 2 in power 10 = 1024