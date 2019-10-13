var elem = document.getElementById('box');
window.addEventListener('click', function Replace(){
    elem.style.left = (this.event.clientX - elem.clientWidth/2) + 'px';
    elem.style.top = (this.event.clientY - elem.clientHeight/2) + 'px';
});