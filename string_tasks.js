//? Template literal & String tasks

//*Hello,who dis?

//Take a name as a variable & log this

function MyName(name){
    return(`Hello ${name}! Welcome to Javascript`)
}
console.log(MyName("Janvi"));

//**************************************************************************************** */

//* Age reveal Drama

//create variable  name & age,then log

function NameAge(name,age){
    return(`Hi, I'm ${name} and I'm ${age} years old. Totally becoming a js pro`)
}
console.log(NameAge("Janvi",19));

//**************************************************************************************** */

//*sum it up like pro.

//given two numbers,log

// function Sum(a,b,c=a+b){
function Sum(a,b){
    return (`The sum of ${a} and ${b} is ${a + b}`)
}
console.log(Sum(23,3));

//**************************************************************************************** */

//*String length

//Take a username variable & log

function UserName(name){
    return(`Your Username has ${name.length} characters`)
}
console.log(UserName("Janvi@2006"));

//**************************************************************************************** */

//Take a string(name) and log

function uppercase(name){
    return(`Your Name in uppercase is ${name.toUpperCase()}`)
}
console.log(uppercase("janvi"));


