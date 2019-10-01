var String = function (name){

    this.name = name;
 };

 String.prototype.Upper = function(){

    return this.name.charAt(0).toUpperCase() +this.name.charAt(1)+this.name.charAt(2)+this.name.charAt(3).toUpperCase();
 }

var me = new String ('karl');

 console.log(me.Upper());