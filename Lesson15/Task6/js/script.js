var arr=new Array();
var len=parseInt(prompt('Input length of massive', ''));
var choose=prompt('If you want to fill in an array with random numbers - press cancel, than manually -input 1 and press OK','');
  Checking();
function RandomNumber(min,max){
    var randomnumder=Math.floor(Math.random() * (max-min+1))+min;
    return randomnumder;
}
function AddNumInMatrix(){
    for(i=0;i<len;i++){
        arr[i]=new Array();
    }
    if(choose==null){
    for(i=0;i<len;i++){
      arr[i]=RandomNumber(1,100);
    }
    console.log('Massive:',arr);
}else{
    for(i=0;i<len;i++){
      arr[i]=prompt('Input number!','');
    }
    console.log('Massive:',arr);
  }
  return arr;
}
function Checking(){
    AddNumInMatrix();
        comparison=arr[0];
        var bool=typeof(comparison);
        if(bool=="number"){
            ;console.log('Checking:','All of numbers are random!');
        }else{
            console.log('Checking:','All of numbers was entered through prompt!')
        }
}