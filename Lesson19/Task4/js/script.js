table.onmouseover = function(event){
    var target = event.target;
    target.style.background = 'green';
}
table.onmouseout = function(event){
    var target = event.target;
    target.style.background = '';
}