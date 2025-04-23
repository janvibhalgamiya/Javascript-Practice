//? symbol.iterable

//? String is iterable

// for (let char of "test") {
//     //* triggers 4 times: once for each character
//     alert( char ); //* t, then e, then s, then t
//   }


// let str = '𝒳😂';
// for (let char of str) {
//     alert( char );           //* 𝒳, and then 😂
// }


//? Calling an iterator explicitly

// let str = "Hello";
// //* does the same as
// //* for (let char of str) alert(char);
// let iterator = str[Symbol.iterator]();
// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   alert(result.value); //* outputs characters one by one (h,e,l,l,o) one world like h output 1 by 1
// }


//? iterables and array-likes

// let arrayLike = { //* has indexes and length => array-like
//     0: "Hello",
//     1: "World",
//     length: 2
//   };
//   //* Error (no Symbol.iterator)
//   for (let item of arrayLike) {}           //* error apse


//? Array.from   //(Array.from(obj[, mapFn, thisArg]))

// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
//   };
//   let arr = Array.from(arrayLike);             //* (*)
//   alert(arr.pop());                            //* World (method works)


// function slice(str, start, end) {
//     return Array.from(str).slice(start, end).join('');
//   }
//   let str = '𝒳😂𩷶';
//   alert( slice(str, 1, 3) ); //* 😂𩷶
//   //* the native method does not support surrogate pairs
//   alert( str.slice(1, 3) ); //* garbage (two pieces from different surrogate pairs)


