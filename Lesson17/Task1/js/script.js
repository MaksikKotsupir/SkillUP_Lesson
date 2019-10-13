 var init=0;
 var startDate;
 var clocktimer;

 function clearFields() {
  init = 0;
  clearTimeout(clocktimer);
  document.clockform.clock.value='00:00:00';
 }

 function clearALL() {
  clearFields();
  document.getElementById('marker').innerHTML = '';
  m=0;
 }

 function startTIME() { 
  var thisDate = new Date();
  var t = thisDate.getTime() - startDate.getTime();
  t = Math.floor (t/1000);
  var s = t%60; t-=s;
  t = Math.floor (t/60);
  var m = t%60; t-=m;
  t = Math.floor (t/60);
  var h = t%60;
  if (h<10) h='0'+h;
  if (m<10) m='0'+m;
  if (s<10) s='0'+s;
  if (init==1) document.clockform.clock.value = h + ':' + m + ':' + s ;
  clocktimer = setTimeout("startTIME()",1000);
 }
 function Pause(){
    init=false;
}
 var e=1,m=0;
 function findTIME() {
  if (init==0) {
   startDate = new Date();
   startTIME();
   init=1;
  } 
  else {
    i = e + m;
    document.getElementById('marker').innerHTML = "Lap " + i+ " : " + document.clockform.clock.value + '<br>' + document.getElementById('marker').innerHTML; 
    m++;  
   }
 }