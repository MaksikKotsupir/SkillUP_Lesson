var calculator = {
    number1: +prompt('Input first number!',''),
    number2: +prompt('Input second number!',''),
    action: prompt('Input action!','')
}

if(calculator.action=="*"){
    result = calculator.number1 * calculator.number2;
}else if (calculator.action=="+"){
    result = calculator.number1 + calculator.number2;
}else{
    alert('Input action * or +')
}
console.log('Task : ' + calculator.number1 +' '+ calculator.action +' '+ calculator.number2 + " = " + result);