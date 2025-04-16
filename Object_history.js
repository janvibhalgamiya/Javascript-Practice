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