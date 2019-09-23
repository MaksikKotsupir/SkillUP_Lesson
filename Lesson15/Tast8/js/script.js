var arr=[8,6,12,10];
var check=prompt("If you want to add a number input - 1 and press - OK!")
if(check==null){  
    var Sqn=arr.map(Square);
    console.log(Sqn);
}else{
    AddingNumber();
    var Sqn=arr.map(Square);
    console.log(Sqn);
}

function Square(item){
    var Mult=item*item;
    return Mult;
}

function AddingNumber(){
    var AddNum=arr.push(parseInt(prompt('Add number!','')));
    return AddNum;
}

