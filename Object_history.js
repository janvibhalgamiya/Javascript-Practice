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



//? InteredLinked Object

// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
  
//     return {
//       father: man,
//       mother: woman
//     }
//   }
  
//   let family = marry({
//     name: "John"
//   }, {
//     name: "Ann"
//   });

//* Delete the sentence 
// delete family.father;
// delete family.mother.husband;



//? ********** Objects Methods ********

//?Method Example

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   user.sayHi = function() {
//     alert("Hello!");
//   };
  
//   user.sayHi(); //* Hello!


//?Method shorthand

// these objects do the same

// user = {
//     sayHi: function() {
//       alert("Hello");
//     }
//   };
  
  // method shorthand looks better, right?
//   user = {
//     sayHi() { // same as "sayHi: function(){...}"
//       alert("Hello");
//     }
//   };



//? "This" method

// let user={
//     name:"john",
//     age:30,

//     sayHi(){
           //*"This" is the "current object"
//         alert(this.name);
//     }

// };

// user.sayHi(); //*john



//? "This" is not bound

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }

//* use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

//* these calls have different this
//* "this" inside the function is the object "before the dot"
// user.f();         //* John  (this == user)
// admin.f();        //* Admin  (this == admin)

// admin['f']();     //* Admin (dot or square brackets access the method – doesn't matter)



//? Arrow Function have no "This"

// let user = {
//     firstName: "Ilya",
//     sayHi() {
//       let arrow = () => alert(this.firstName);
//       arrow();
//     }
//   };
  
//   user.sayHi(); // Ilya



//? Create Calculator

// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );



//? Constucter Function

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Jack");
  
//   alert(user.name); // Jack
//   alert(user.isAdmin); // false



//? New.Target

// function User(name) {
//     if (!new.target) { // if you run me without new
//       return new User(name); // ...I will add new for you
//     }
//     this.name = name;
//   }
  
//   let john = User("John"); // redirects call to new User
//   alert(john.name); // John



//?Return from constructor

//* First method
// function BigUser() {
//     this.name = "John";
//     return { name: "Godzilla" };  // <-- returns this object
//   }
  
//   alert( new BigUser().name );  // <-- Godzilla, got that object

//* Second Method
// function SmallUser() {
//     this.name = "John";
//     return; // <-- returns this
//   }
  
//   alert( new SmallUser().name );  // John



//? Method in constuctor

// function User(name) {
//     this.name = name;
  
//     this.sayHi = function() {
//       alert( "My name is: " + this.name );
//     };
//   }
  
//   let john = new User("John");
  
//   john.sayHi(); // My name is: John



//? *********** Optional Chaining '?' ********

//? The  "non-existing-property" problem 

// let user = {}; //* a user without "address" property
// alert(user.address.street); //* Error!

//* document.querySelector('.elem') is null if there's no element
// let html = document.querySelector('.elem').innerHTML; //* error if it's null



//? Optional Chaining

// let user = {}; //* user has no address
// alert( user?.address?.street ); //* undefined (no error)

// let user = null;
// alert( user?.address ); //* undefined
// alert( user?.address.street ); //* undefined



//? Short circuiting

// let user = null;
// let x = 0;
// user?.sayHi(x++);   //* no "user", so the execution doesn't reach sayHi call and x++
// alert(x);           //* 0, value not incremented



//? Other Variants:?.(),?.[]

// let userAdmin = {
//     admin() {
//       alert("I am admin");
//     }
//   };
//   let userGuest = {};
//   userAdmin.admin?.();   //* I am admin
//   userGuest.admin?.();   //* nothing happens (no such method)



// let key = "firstName";
// let user1 = {
//   firstName: "John"
// };
// let user2 = null;
// alert( user1?.[key] );      //* John
// alert( user2?.[key] );      //* undefined


//? delete varient

// delete user?.name;    //* delete user.name if user exists




//? ******** Symbol Type **********

//? Symbols (A “symbol” represents a unique identifier.)

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// alert(id1 == id2);          //* false



//? Hidden Properties

// let user = {                     //* belongs to another code
//     name: "John"
//   };
  
//   let id = Symbol("id");
//   user[id] = 1;
//   alert( user[id] );             //* we can access the data using the symbol as the key



//? symbol in an oobject literal (If we want to use a symbol in an object literal {...}, 
//?                                    we need square brackets around it.)

// let id = Symbol("id");

// let user = {
//   name: "John",
//   [id]: 123              //* not "id": 123
// };



//? symbols are skipped by for..in (Symbolic properties do not participate in for..in loop.)

// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123
// };

// for (let key in user) alert(key);             //* name, age (no symbols)
// //* the direct access by the symbol works
// alert( "Direct: " + user[id] );               //* Direct: 123



//? Global symbols

//* read from the global registry
// let id = Symbol.for("id");           //* if the symbol did not exist, it is created

//* read it again (maybe from another part of the code)
// let idAgain = Symbol.for("id");

//* the same symbol
// alert( id === idAgain );            //* true



//? Symbol.KeyFor

//* get symbol by name
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");
//* get name by symbol
// alert( Symbol.keyFor(sym) );     //* name
// alert( Symbol.keyFor(sym2) );    //* id


//? System symbol

// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive
// …and so on...?


//? ToString/Value of

// let user = {name: "John"};
// alert(user);                        //* [object Object]
// alert(user.valueOf() === user);     //* true


// let user = {
//     name: "John",
//     money: 1000,
//     //* for hint="string"
//     toString() {
//       return `{name: "${this.name}"}`;
//     },
//     //* for hint="number" or "default"
//     valueOf() {
//       return this.money;
//     }
//   };
//   alert(user); //* toString -> {name: "John"}
//   alert(+user); //* valueOf -> 1000
//   alert(user + 500); //* valueOf -> 1500

