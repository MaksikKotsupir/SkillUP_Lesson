        // Task1
var result = prompt("Input your digit","0");
if(result > 0){
    console.log("1");
}else if(result < 0) {
    console.log("-1");
}else if(result == 0){
    console.log("0");
}else{
    console.log("Text value");
}


        // Task2
var firstvalue = (result > 0),
    secondvalue = (result < 0),
    output = firstvalue ? "1" : secondvalue ? "-1" : "0";
console.log(output);
