        // Input values
var minimum = prompt('Input min value!',1);
console.log('Min value:',minimum);
var min = parseInt(minimum);

var maximum = prompt('Input max value!',0);
console.log('Max value:',maximum);
var max = parseInt(maximum);

        // Random value
var random = Math.floor(Math.random() * (max -min + 1) ) + min;
console.log('Random value:',random);

        // even/odd number
if (random%2==0){
    console.log('Value is even!');
}else{
    console.log('Value is odd!');
}



 