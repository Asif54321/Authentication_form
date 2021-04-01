function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
	var email = document.getElementById('email');
	var phone = document.getElementById('phone');
	var re = document.getElementById('re');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 12){
        alert('Max of 12');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');
		}
		else if(!pw.value.match(re.value)){
        alert('Password does not match');

    }else{
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created login please');
	    blue();
    }
	 
}


function red(){
window.location.href = 'Auth.html';
}

var mail = document.getElementById('Name1');

function blue(){
window.location.href = 'index.html';
}


var storedName = localStorage.getItem('email');


function check(){
    
	var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');

    var Name1 = document.getElementById('Name1');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");
    if(Name1.value == storedName && userPw.value == storedPw)
	{
		alert('You are login please go for verification');
		red();
		}
	
	else{
        
		alert('Error in login');
    }
}