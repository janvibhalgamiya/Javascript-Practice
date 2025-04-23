//??????????????---- Array Methods-----??????????????????

//? Add/remove items

// We already know methods that add and remove items from the beginning or the end:

// arr.push(...items) – add the one last element,
// arr.pop() – remove the one last element,
// arr.shift() – remove the one first element,
// arr.unshift(...items) – add the one first element.


//? Splice (add, remove and replace elements.) orinal array ma changes kare

// arr.splice(start[, deleteCount, elem1, ..., elemN])

//? remove one element
// let arr = ["I", "study", "JavaScript"];
// arr.splice(1, 1);                       //* from index 1 remove 1 element
// alert( arr );                           //* ["I", "JavaScript"]

//?add two element
// let arr = ["I", "study", "JavaScript", "right", "now"];
// //* remove 3 first elements and replace them with another
// arr.splice(0, 3, "Let's", "dance");
// alert( arr );                           //* now ["Let's", "dance", "right", "now"]

//?remove 1 two element
// let arr = ["I", "study", "JavaScript", "right", "now"];
// //* remove 2 first elements
// let removed = arr.splice(0, 2);
// alert( removed );                       //* "I", "study" <-- array of removed elements

//?add 2 elements
// let arr = ["I", "study", "JavaScript"];
// //* from index 2
// //* delete 0
// //* then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");
// alert( arr );                             //* "I", "study", "complex", "language", "JavaScript"

//? add 2 elements
// let arr = [1, 2, 5];
// //*from index -1 (one step from the end)
// //* delete 0 elements,
// //*then insert 3 and 4
// arr.splice(-1, 0, 3, 4);
// alert( arr ); // 1,2,3,4,5



//? ----------Slice

// arr.slice([start], [end])


// let arr = ["t", "e", "s", "t"];
// alert( arr.slice(1, 3) );                       //* e,s (copy from 1 to 3)
// alert( arr.slice(-2) );                         //* s,t (copy from -2 till the end)


//? -----------Concat
//? arr.concat(arg1, arg2...)
//? The method arr.concat creates a new array that includes values from other arrays and additional items.

// let arr = [1, 2];
// //* create an array from: arr and [3,4]
// alert( arr.concat([3, 4]) ); // 1,2,3,4
// //* create an array from: arr and [3,4] and [5,6]
// alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// //* create an array from: arr and [3,4], then add values 5 and 6
// alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


// let arr = [1, 2];
// let arrayLike = {
//   0: "something",
//   length: 1
// };
// alert( arr.concat(arrayLike) );                     //* 1,2,[object Object]


// let arr = [1, 2];
// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };
// alert( arr.concat(arrayLike) );                        //* 1,2,something,else



//? ------------ Iterate 

//? ****** ForEach(The arr.forEach method allows to run a function for every element of the array.)

// arr.forEach(function(item, index, array) {
//     //* ... do something with an item
//   });


//* for each element call alert
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);()

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
//   });


//? *********************** Searching in Array

//? ----- indexOf / LastindexOf and includes

//--> arr.indexOf(item, from) – looks for item starting from index from, and
//  returns the index where it was found, otherwise -1.
//--> arr.includes(item, from) – looks for item starting from index from, returns true if found.


// let arr = [1, 0, false];
// alert( arr.indexOf(0) );                          //* 1
// alert( arr.indexOf(false) );                      //* 2
// alert( arr.indexOf(null) );                       //* -1
// alert( arr.includes(1) );                         //* true


// let fruits = ['Apple', 'Orange', 'Apple']
// alert( fruits.indexOf('Apple') );                   //* 0 (first Apple)
// alert( fruits.lastIndexOf('Apple') );               //* 2 (last Apple)


//? ----- find / findIndex and findLastindex

// let result = arr.find(function(item, index, array) {
//     //* if true is returned, item is returned and iteration is stopped
//     //* for falsy scenario returns undefined
//   });


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
//   let user = users.find(item => item.id == 1);
//   alert(user.name);                                    //* John


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     {id: 4, name: "John"}
//   ];
//   //* Find the index of the first John
//   alert(users.findIndex(user => user.name == 'John'));              //* 0
//   //* Find the index of the last John
//   alert(users.findLastIndex(user => user.name == 'John'));          //* 3



//? ------ Filter

// let results = arr.filter(function(item, index, array) {
//     //* if true item is pushed to results and the iteration continues
//     //* returns empty array if nothing found
//   });


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
//   //* returns array of the first two users
//   let someUsers = users.filter(item => item.id < 3);
//   alert(someUsers.length);                                            //* 2



//? ****************** Transform an array

//?---------- map

// let result = arr.map(function(item, index, array) {
//     //* returns the new value instead of item
//   });


// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths);                                                            //* 5,7,6


//? sort(fn) (array ma value ni place change karva)

// let arr = [ 1, 2, 15 ];
// //* the method reorders the content of arr
// arr.sort();
// alert( arr );                                                //* 1, 15, 2


// function compare(a, b) {
//     if (a > b) return 1;                                       //* if the first value is greater than the second
//     if (a == b) return 0;                                      //* if values are equal
//     if (a < b) return -1;                                      //* if the first value is less than the second
//   }


// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }
//   let arr = [ 1, 2, 15 ];
//   arr.sort(compareNumeric);
//   alert(arr);                                                     //* 1, 2, 15


// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//     alert( a + " <> " + b );
//     return a - b;
//   });           //(ama 2-2 na number jodi jay)



//? reverse 

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// alert( arr );                                                     //* 5,4,3,2,1


//? split and join 
//? split(atle k ek-ek word ne "",",",'' avi rite lakhi shakay)
//? join(example ma jevu che am join karva like 2 words ne) 


// let names = 'Bilbo, Gandalf, Nazgul';
// let arr = names.split(', ');
// for (let name of arr) {
//   alert( `A message to ${name}.` );                                //* A message to Bilbo  (and other names)
// }


// let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
// alert(arr);                                                        //* Bilbo, Gandalf


// let str = "test";
// alert( str.split('') );                                            //* t,e,s,t


// let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
// let str = arr.join(';');                                              //* glue the array into a string using ;
// alert( str );                                                         //* Bilbo;Gandalf;Nazgul



//? reduce/reduceRight
//? reduce(badhano plus thay only numbers)


// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// alert(result);                                                          //* 15


// let arr = [1, 2, 3, 4, 5];
// //* removed initial value from reduce (no 0)
// let result = arr.reduce((sum, current) => sum + current);
// alert( result );                                                           //* 15


// let arr = [];
//* Error: Reduce of empty array with no initial value
//* if the initial value existed, reduce would return it for the empty arr.
// arr.reduce((sum, current) => sum + current);


// const array1 = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//   ];
//   const result = array1.reduceRight((accumulator, currentValue) =>
//     accumulator.concat(currentValue),
//   );
//   console.log(result);
//* Expected output: Array [4, 5, 2, 3, 0, 1]


//?Array.isArray (array no type janva typeOf() ny isArray use thay che)

// alert(Array.isArray({}));             //* false
// alert(Array.isArray([]));             //* true



//?Most methods support "thisArg"   //(thisArg is the optional last argument)

// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
//* ...
//* thisArg is the optional last argument



// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//       return user.age >= this.minAge && user.age < this.maxAge;
//     }
//   };
//   let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
//   ];
//   //* find users, for who army.canJoin returns true
//   let soldiers = users.filter(army.canJoin, army);
//   alert(soldiers.length);                               //* 2
//   alert(soldiers[0].age);                               //* 20
//   alert(soldiers[1].age);                               //* 23


