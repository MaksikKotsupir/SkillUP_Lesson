var num1 = prompt("Input first value!", 0);
var number1 = parseInt(num1);
console.log('First value:',number1);

var num2 = prompt("Input second value!", 0);
var number2 = parseInt(num2);
console.log('Second value:',number2);

if (number1>number2){
    console.log('First number is greater:',number1);
}else if(number1<number2){
    console.log('Second number is greater:',number2)
}else if(number1==number2){
    console.log('The numbers are equal!');
}