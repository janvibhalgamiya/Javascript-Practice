//? Map and Set

//?----------Map

//* Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.


// let map = new Map();
// map.set('1', 'str1');                    //* a string key
// map.set(1, 'num1');                      //* a numeric key
// map.set(true, 'bool1');                  //* a boolean key
// //* remember the regular Object? it would convert keys to string
// //* Map keeps the type, so these two are different:
// alert( map.get(1)   );                  //* 'num1'
// alert( map.get('1') );                  //* 'str1'

// alert( map.size );                      //* 3


//?---> Map can also use objects as keys.

// let john = { name: "John" };
// //* for every user, let's store their visits count
// let visitsCountMap = new Map();
// //* john is the key for the map
// visitsCountMap.set(john, 123);
// alert( visitsCountMap.get(john) ); //* 123


// let john = { name: "John" };
// let ben = { name: "Ben" };
// let visitsCountObj = {}; //* try to use an object
// visitsCountObj[ben] = 234; //* try to use ben object as the key
// visitsCountObj[john] = 123; //* try to use john object as the key, ben object will get replaced
// //* That's what got written!
// alert( visitsCountObj["[object Object]"] ); //* 123


//?---> Iteration over map

//* For looping over a map, there are 3 methods:

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.



// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);
//   //* iterate over keys (vegetables)
//   for (let vegetable of recipeMap.keys()) {
//     alert(vegetable); //* cucumber  , tomatoes, onion
//   }
//   //* iterate over values (amounts)
//   for (let amount of recipeMap.values()) {
//     alert(amount); //* 500, 350, 50
//   }
//   //* iterate over [key, value] entries
//   for (let entry of recipeMap) { //* the same as of recipeMap.entries()
//     alert(entry); //* cucumber,500 (and so on)
//   }



//* runs the function for each (key, value) pair
// recipeMap.forEach( (value, key, map) => {
//     alert(`${key}: ${value}`); //* cucumber: 500 etc
//   });


//? Object.entries: Map from object

//* array of [key, value] pairs
// let map = new Map([
//     ['1',  'str1'],
//     [1,    'num1'],
//     [true, 'bool1']
//   ]);
//   alert( map.get('1') );                    //* str1


// let obj = {
//     name: "John",
//     age: 30
//   };
//   let map = new Map(Object.entries(obj));
//   alert( map.get('name') );                  //* John


//? Object.fromEntries: Object from Map

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);
//   //* now prices = { banana: 1, orange: 2, apple: 4 }
//   alert(prices.orange);                           //* 2


// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('apple', 4);
// let obj = Object.fromEntries(map.entries());              //* make a plain object (*)
// //* done!
// //* obj = { banana: 1, orange: 2, apple: 4 }
// alert(obj.orange);                                        //* 2



//? ************ Set

//* its main methods are:

// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), 
//copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.


// let set = new Set();
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
// //* visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
// //* set keeps only unique values
// alert( set.size ); // 3
// for (let user of set) {
//   alert(user.name); //* John (then Pete and Mary)
// }



//? Iteration over set

// let set = new Set(["oranges", "apples", "bananas"]);
// for (let value of set) alert(value);
   //* the same with forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });


//*The same methods Map has for iterators are also supported:

// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.


