var fruits = ["apple", "orange", "cherry", "banana", "pineapple"];
var max=0,min=200,maxword,minword;
fruits.forEach(myFunction);

function myFunction(item, index) {
    if(fruits[index].length>max){
        max=fruits[index].length;
        maxword=fruits[index];
    }
    
    if(fruits[index].length<min){
        min=fruits[index].length;
        minword=fruits[index];
    }
}
console.log('The biggest word:', maxword);
console.log('The length of word:',max );
console.log('The smallest word:', minword);
console.log('The length of word:',min );