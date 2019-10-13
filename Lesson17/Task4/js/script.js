function Calculator(a,b){
    this.a=a;
    this.b=b;
    console.log("number1: " + this.a);
    console.log("number2: " + this.b);

    this.mult = function(){    
        mul=this.a*this.b
        return mul;
    };
    this.suma = function(){    
        sum=this.a+this.b
        return sum;
    };
}
num1=+prompt("Number1",'');
num2=+prompt("Number2",'');
var calc = new Calculator(num1,num2);
console.log('Sum:',calc.suma());
console.log('Product:',calc.mult());