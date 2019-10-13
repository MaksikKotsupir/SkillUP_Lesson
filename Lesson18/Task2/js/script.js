var text;
for(i=1;i<=5;i++){
    var NewLi = document.createElement('li');
    text=i;
    NewLi.innerHTML = text;
    list.appendChild(NewLi);    
}
console.log(document.getElementById('list'));