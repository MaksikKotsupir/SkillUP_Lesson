function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    var copied=copyText.value;
    var copied=copied.split(' ', );
    console.log("The text in massive: ",copied);
}
function Lorem15(){
   var str="Lorem ipsum dolor, sit amet consectetur adipisicing elite. Corrupti consectetur saepe quasi ab dolor debitis.";
   var copyText=document.getElementById("myInput");
   copyText.value=str;
}
function Cycle(){
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    var copied=copyText.value;
    var copied=copied.split(' ', );
    var value;
    console.log('Words bigger than 5 and more symbols!');
    for(var i in copied){
        var value=copied[i];  
        if(value.length>=5){     
            console.log('Symbol',i,':',value);
        }
    }
}
