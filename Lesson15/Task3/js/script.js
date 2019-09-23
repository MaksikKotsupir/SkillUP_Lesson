var str=new Array();
var num=parseInt(prompt('Enter number of symbol!',''))
for (i=0;i<num;i++){
    str[i] = new Array();
}
for(i=0;i<str.length;i++){
    str[i]=prompt('Enter some text', '');
}
console.log(str);