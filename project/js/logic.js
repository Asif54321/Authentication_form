var a = '';
var num = [];

function sendNum(digit){

	num.push(digit);

	if(num.length != 1){
		a = '';
 document.getElementById('sc').innerHTML = a;
	}
   for(i=0; i<num.length ; i++){

		a = a + num[i];				// concatenate the elements of the array "num" into a single string, which will be displayed on the screen
		
	}
	document.getElementById('sc').innerHTML = a;
   
   

	
}

function clearScr(){
document.getElementById('sc').innerText = '';
	
	while(num.length > 0){
    	num.pop();
	}

	a ='';
}