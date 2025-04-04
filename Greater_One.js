//takes two numbers & logs the larger one.



function GreaterOne(a,b){
    // if(a>b){
    //    return "9 is greater than 5";
    // }else{
    //     return "5 is greater than 9"
    // }
    // return ((a>b) ? "9 is greater than 5" : "5 is greater than 9");
    return( (a>b) ? `${a} is greater than ${b}` : `${b} is greater than ${a}`)
}
console.log(GreaterOne(24,65));
