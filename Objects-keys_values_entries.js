//? Object.Keys,Values,Entries

//* In the previous chapter we saw methods map.keys(), map.values(), map.entries().


//*They are supported for:

//--> Map
//--> Set
//--> Array

//?For plain objects, the following methods are available:

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [ ["name","John"], ["age",30] ]



// let user = {
//     name: "John",
//     age: 30
//   };
//   //* loop over values
//   for (let value of Object.values(user)) {
//     alert(value); //* John, then 30
//   }



//? Transforming Objects

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
//   };
//   let doublePrices = Object.fromEntries(
//     //* convert prices to array, map each key/value pair into another pair
//     //* and then fromEntries gives back the object
//     Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
//   );
//   alert(doublePrices.meat); //* 8


