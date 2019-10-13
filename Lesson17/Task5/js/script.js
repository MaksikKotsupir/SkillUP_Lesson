var numbers1 =  function Appropriation1() { 
    num1=document.getElementById('number_1').value;
    number1 = num1
    return number1;
}
var numbers2 =  function Appropriation2() { 
    num2=document.getElementById('number_2').value;
    number2 = num2
    return number2;
}
function Sum(){
    suma = parseInt(this.numbers1()) + parseInt(this.numbers2());
    document.getElementById('res').value=suma;
}
function Product(){
    mult = parseInt(this.numbers1()) * parseInt(this.numbers2());
    document.getElementById('res').value=mult;
}