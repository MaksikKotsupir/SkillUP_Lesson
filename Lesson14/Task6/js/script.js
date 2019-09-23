var arr = ['lorem', 'ipsum', 'is', 'simply', 'dummy'];
var Arr='';
for (i=0; i<arr.length; i++){
    arr[i]=arr[i].toUpperCase();
    console.log(arr[i]);
    
    Arr=Arr.concat(' ',arr[i]);
    
}
console.log('String:',Arr);