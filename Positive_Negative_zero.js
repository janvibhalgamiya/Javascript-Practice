//checks if the number is positive,negative or zero.

function CheckNumber(num){
    // if(num > 0){
    //     return "The Number is Positive";
    // }else if(num < 0){
    //     return "The Number is Negative";
    // }else{
    //     return "The number is Zero";
    // }
    return((num > 0) ? "The Number is Positive" : (num < 0) ? "The Number is Negative" : "The number is Zero");
}
console.log(CheckNumber(-5));
