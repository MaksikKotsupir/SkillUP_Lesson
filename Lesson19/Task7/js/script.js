    function Filter(){
    var inptValue = parseInt(document.querySelector('#inpt').value);
    if(inptValue>47 && inptValue<58){
        alert('Confirm access!');
        console.log(inptValue+':'+'Confirm access!')
    }else if(inptValue>95 && inptValue<106){
        alert('Confirm access!');
        console.log(inptValue+' : '+'Confirm access!')
    }else{
        alert('Confirm failed!');
        console.log(inptValue+':'+'Confirm failed!')
    }
}