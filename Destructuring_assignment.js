//? Destructuring assignment


//? Array destructuring

//* we have an array with a name and surname
// let arr = ["John", "Smith"]
//* destructuring assignment
//* sets firstName = arr[0]
//* and surname = arr[1]
// let [firstName, surname] = arr;
// alert(firstName);                                            //* John
// alert(surname);                                              //* Smith



// let [firstName, surname] = "John Smith".split(' ');
// alert(firstName);                                               //* John
// alert(surname);                                                 //* Smith



//? “Destructuring” does not mean “destructive”.

//* let [firstName, surname] = arr;
// let firstName = arr[0];
// let surname = arr[1];



//? Ignore elements using commas

//* second element is not needed
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// alert( title );                                                  //* Consul



//? Works with any iterable on the right-side

// let [a, b, c] = "abc";                                           //* ["a", "b", "c"]
// let [one, two, three] = new Set([1, 2, 3]);



//? Assign to anything at the left-side

// let user = {};
// [user.name, user.surname] = "John Smith".split(' ');
// alert(user.name);                                                   //* John
// alert(user.surname);                                                //* Smith



//? Looping with .entries()

// let user = {
//     name: "John",
//     age: 30
//   };
//   //* loop over the keys-and-values
//   for (let [key, value] of Object.entries(user)) {
//     alert(`${key}:${value}`);                                //* name:John, then age:30
//   }


// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");
// //* Map iterates as [key, value] pairs, very convenient for destructuring
// for (let [key, value] of user) {
//   alert(`${key}:${value}`);                                //* name:John, then age:30
// }



//? Swap variables trick

// let guest = "Jane";
// let admin = "Pete";
// //* Let's swap the values: make guest=Pete, admin=Jane
// [guest, admin] = [admin, guest];
// alert(`${guest} ${admin}`); //* Pete Jane (successfully swapped!)



//?-------------------The Rest '...'


// let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// alert(name1);                        //* Julius
// alert(name2);                        //* Caesar
// //* Further items aren't assigned anywhere


// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// //* rest is an array of items, starting from the 3rd one
// alert(rest[0]);                        //* Consul
// alert(rest[1]);                        //* of the Roman Republic
// alert(rest.length);                    //* 2


// let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
//* now titles = ["Consul", "of the Roman Republic"]


//?------------------- Default Value


// let [firstName, surname] = [];
// alert(firstName);                      //* undefined
// alert(surname);                        //* undefined


//* default values
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];
// alert(name);                          //* Julius (from array)
// alert(surname);                       //* Anonymous (default used)


//* runs only prompt for surname
// let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];
// alert(name);                          //* Julius (from array)
// alert(surname);                       //* whatever prompt gets



//? &&&&&&&&&&&&&&&&&&&&&& Object destructuring

// let {var1, var2} = {var1:…, var2:…}


// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
//   let {title, width, height} = options;
//   alert(title);                          //* Menu
//   alert(width);                          //* 100
//   alert(height);                         //* 200



// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
//   //* { sourceProperty: targetVariable }
//   let {width: w, height: h, title} = options;
//   //* width -> w
//   //* height -> h
//   //* title -> title
//   alert(title);                          //* Menu
//   alert(w);                              //* 100
//   alert(h);                              //* 200


// let options = {
//     title: "Menu"
//   };
//   let {width = 100, height = 200, title} = options;
//   alert(title);                             //* Menu
//   alert(width);                             //* 100
//   alert(height);                            //* 200


// let options = {
//     title: "Menu"
//   };
//   let {width = prompt("width?"), title = prompt("title?")} = options;
//   alert(title);                             //* Menu
//   alert(width);                             //* (whatever the result of prompt is)


// let options = {
//     title: "Menu"
//   };
//   let {width: w = 100, height: h = 200, title} = options;
//   alert(title);                             //* Menu
//   alert(w);                                 //* 100
//   alert(h);                                 //* 200


// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
//   //* only extract title as a variable
//   let { title } = options;
//   alert(title);                              //* Menu



//? -------------> The rest pattern "..."


// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100
//   };
//   //* title = property named title
//   //* rest = object with the rest of properties
//   let {title, ...rest} = options;
//   //* now title="Menu", rest={height: 200, width: 100}
//   alert(rest.height);                      //* 200
//   alert(rest.width);                       //* 100




//? &&&&&&&&&&&&&&&&&&&&&& Nested destructuring


// let options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
//   };
//   //* destructuring assignment split in multiple lines for clarity
//   let {
//     size: { //* put size here
//       width,
//       height
//     },
//     items: [item1, item2], //* assign items here
//     title = "Menu" //* not present in the object (default value is used)
//   } = options;
//   alert(title);                                //* Menu
//   alert(width);                                //* 100
//   alert(height);                               //* 200
//   alert(item1);                                //* Cake
//   alert(item2);                                //* Donut



//?----> Smart function parameters


// function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
    //* ...
//   }


//* undefined where default values are fine
// showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])



//* we pass object to function
// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
//   };
//   //* ...and it immediately expands it to variables
//   function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     //* title, items – taken from options,
//     //* width, height – defaults used
//     alert( `${title} ${width} ${height}` );                   //* My Menu 200 100
//     alert( items );                                           //* Item1, Item2
//   }
//   showMenu(options);



// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
//   };
//   function showMenu({
//     title = "Untitled",
//     width: w = 100,                                       //* width goes to w
//     height: h = 200,                                      //* height goes to h
//     items: [item1, item2]              //* items first element goes to item1, second to item2
//   }) {
//     alert( `${title} ${w} ${h}` );                       //* My Menu 100 200
//     alert( item1 );                                      //* Item1
//     alert( item2 );                                      //* Item2
//   }
//   showMenu(options);


