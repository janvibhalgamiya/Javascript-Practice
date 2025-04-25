//? WeakMap and WeakSet

//?--->WeakMap

// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj, "ok"); //* works fine (object key)
// //* can't use a string as the key
// weakMap.set("test", "Whoops"); //* Error, because "test" is not an object


// let john = { name: "John" };
// let weakMap = new WeakMap();
// weakMap.set(john, "...");
// john = null; //* overwrite the reference
//* john is removed from memory!



//*WeakMap has only the following methods:

// weakMap.set(key, value)
// weakMap.get(key)
// weakMap.delete(key)
// weakMap.has(key)



//? Use case:additional data

//* 📁 visitsCount.js
// let visitsCountMap = new Map(); //* map: user => visits count
// //* increase the visits count
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }


//* 📁 main.js
// let john = { name: "John" };
// countUser(john); //* count his visits
// //* later john leaves us
// john = null;


//* 📁 visitsCount.js
// let visitsCountMap = new WeakMap(); //* weakmap: user => visits count
// //* increase the visits count
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }


//?Use case:caching



//* 📁 cache.js
let cache = new Map();
//* calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* **** calculations of the result for **** */ obj;
    cache.set(obj, result);
    return result;
  }
  return cache.get(obj);
}
//* Now we use process() in another file:
//* 📁 main.js
let obj = {/* **** let's say we have an object **** */};
let result1 = process(obj); //* calculated
//* ...later, from another place of the code...
let result2 = process(obj); //* remembered result taken from cache
//* ...later, when the object is not needed any more:
obj = null;
alert(cache.size); //* 1 (Ouch! The object is still in cache, taking memory!)




//?&&&&&&&&&&&  WeakSet


// let visitedSet = new WeakSet();
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
// visitedSet.add(john);                  //* John visited us
// visitedSet.add(pete);                  //* Then Pete
// visitedSet.add(john);                  //* John again
// //* visitedSet has 2 users now
// //* check if John visited?
// alert(visitedSet.has(john)); //* true
// //* check if Mary visited?
// alert(visitedSet.has(mary)); //* false
// john = null;
//* visitedSet will be cleaned automatically



//? Summary

// WeakMap is Map =======- like collection that allows only objects as keys and removes them together with  
// associated value once they become inaccessible by other means.

// WeakSet is Set ========- like collection that stores only objects and removes them once they become 
// inaccessible by other means.