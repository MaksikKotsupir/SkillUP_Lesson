var nam = function(name){
    var getName = function(){
        return name;
    }
    return getName;
}
var inputName = prompt('Input your name!', '');
myName = nam(inputName);
console.log(myName());
