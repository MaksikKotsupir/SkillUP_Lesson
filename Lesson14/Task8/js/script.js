var str1 = prompt('Input some text!','Maks');
console.log('First text:',str1);
var str2 = prompt('Input some text!','Maksik');
console.log('Second text:',str2);

var condition1 = (str1>str2), condition2 = (str1<str2);
result = condition1 ? str1 : condition2 ? str2 : 'Strings are equal!';
console.log('Larger text:',result,'|','Number of symbols:',result.length);