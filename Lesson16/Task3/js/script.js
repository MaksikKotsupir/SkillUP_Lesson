var calculator = {
    add: function () {
        this.a = +prompt("Enter value", "");
        this.b = +prompt("Enter value", "");
    },
    sum: function () {
        return this.a + this.b;
    },
    mult: function(){
        return this.a * this.b;
    }
}

calculator.add();
var value = prompt('What are you want to do with this numbers?   (*) or (+)','');
if(value=='+'){
    console.log('Sum of numbers:'+calculator.sum());
}else if(value=='*'){
    console.log('Mult of numbers:'+calculator.mult());
}else{
    alert('Enter the action!');
}
