window.addEventListener('scroll', function(e){
    if(this.scrollY>200){
        var box = document.getElementById('box');
        box.style.background = 'red';
        var txt = document.getElementById('text');
        txt.style.cssText = "color:#fff; font-size: 40px";
    }
    if(this.scrollY<200){
        var box = document.getElementById('box');
        box.style.background = 'green';
        var txt = document.getElementById('text');
        txt.style.cssText="color:#000; font-size: 10px";
    }
    console.log(this.scrollY)
});