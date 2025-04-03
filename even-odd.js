// write a function that takes a number and returns "even" or "odd"

function evenodd(num) {
  //   if (num % 2) {
  //     return "Odd Number";
  //   } else {
  //     return "Even Number";
  //   }
  // ternary operator:
 return ((num % 2 === 0) ? "Odd Number" : "Even Number");
}

// difference between == and ===
console.log("----",123 == "123")
console.log("----",123 === "123") //third equal check the type

console.log(evenodd(253));
