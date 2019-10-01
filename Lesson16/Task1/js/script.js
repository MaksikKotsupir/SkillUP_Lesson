var skill ={
    name: prompt('Enter name!',"html"),
    number: +prompt('Enter number',5),
    technology: function(){
        return "\""+this.name+"-"+this.number+"\"";
    }
}
console.log(skill.technology());