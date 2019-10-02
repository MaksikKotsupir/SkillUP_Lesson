// var time=0;
// for(i=0;i<10;i++){
//     time++;
//     console.log(time)
// }
// var field=document.getElementById('field').value;
// console.log('start',field);
// function Timer(){  
//     field=time;
//     console.log('end',field);
// }
// Timer();

var time=0; 
secunda = document.getElementById('sec'); 
minuta = document.getElementById('min');
hour = document.getElementById('hour');
function Timer(){
for(i=0;i<1;i++){
    time++;
    if(sec.value==59){
        minuta.value++;
        time=0;
        if(min.value==59){
            hour.value++;
            min.value=0;
        }
    }
}
    setInterval(function settime(){sec.value = (time-1)},100);
}
function Start(){
    setInterval(Timer,100);   
}

  









    
