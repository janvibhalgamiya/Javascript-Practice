//?object syntax

// let user = {
//     name: "John"
//   };

//? Comaprison by refrence

// let a = {};
// let b = a; // copy the reference
// alert( a == b ); // true, both variables reference the same object
// alert( a === b ); // true

//?Cloning and Merging

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let clone = {}; // the new empty object
  
   //*let's copy all user properties into it
//   for (let key in user) {
//     clone[key] = user[key];
//   }
  
   //* now clone is a fully independent object with the same content
//   clone.name = "Pete"; // changed the data in it
//   alert( user.name ); // still John in the original object

//?Object.Assign

// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

   //* copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

   //* now user = { name: "John", canView: true, canEdit: true }
// alert(user.name); // John
// alert(user.canView); // true
// alert(user.canEdit); // true

//? Nested Cloning

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = Object.assign({}, user);
  
//   alert( user.sizes === clone.sizes ); // true, same object
  
     //* user and clone share sizes
//   user.sizes.width = 60;    // change a property from one place
//   alert(clone.sizes.width); // 60, get the result from the other one

//?Structured Cloning

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = structuredClone(user);
  
//   alert( user.sizes === clone.sizes ); // false, different objects
  
     //* user and clone are totally unrelated now
//   user.sizes.width = 60;    // change a property from one place
//   alert(clone.sizes.width); // 50, not related
