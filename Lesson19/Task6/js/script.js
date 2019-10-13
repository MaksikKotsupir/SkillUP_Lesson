window.addEventListener('resize', function(){
    var x = window.innerWidth;
    var elem = document.getElementById('box');
    if(x<768){
        elem.classList.add("addingClass");
    }else if(x>=768){
        elem.classList.remove("addingClass");
    }
    console.log(elem);
});

 