//checks if the number is positive,negative or zero.

function CheckNumber(num){
    if(num > 0){
        return "The Number is Positive";
    }else if(num < 0){
        return "The Number is Negative";
    }else{
        return "The number is Zero";
    }
}
console.log(CheckNumber(0));
