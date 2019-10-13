alert('Maximum number of numbers = 100!')
function Adding() {
    var arr = new Array();
    var input;
    input = prompt('Input number!');
    arr.push(input);
    console.log(arr);
    if (input === null) {
        alert('Clear');
    }else{
        for(i=0;i<99;++i){
            input = prompt('Input number!');
            if (input === null) {
                console.log('Number of numbers in array:', arr.length);
                break;
            }else{
            arr.push(input);
            console.log(arr);
            }  
        }
    }
}
Adding();