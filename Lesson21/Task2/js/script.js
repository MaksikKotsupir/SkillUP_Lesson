$(document).ready(function(){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19 ',
        success: function(data){
            console.log(data);
            $('#icon').append('<img src="http://openweathermap.org/img/w/'+data.weather[0].icon+'.png" alt="weather">');
            $('#temp').append('+'+data.main.temp+'&deg;С');
            $('#feelslike').append('Feels like: '+'+'+(data.main.temp_max+1)+'&deg;С');
            $('#press').append('Pressure: '+data.main.pressure+' hPa');            
            $('#humid').append('Humidity: '+data.main.humidity+'%');
            $('#windspeed').append('Wind: '+data.wind.speed+'km/h '+'&nbsp;'+data.wind.deg+'&deg;');
            $('#descript').append(data.weather[0].description);
        }
    });
});
var currentDate = new Date();
var twoDigitMonth=((currentDate.getMonth()+1)>=10)? (currentDate.getMonth()+1) : '0' + (currentDate.getMonth()+1);  
var twoDigitDate=((currentDate.getDate())>=10)? (currentDate.getDate()) : '0' + (currentDate.getDate());
var createdDateTo = twoDigitDate + "-" + twoDigitMonth + "-" + currentDate.getFullYear();
$('#date').append(createdDateTo);