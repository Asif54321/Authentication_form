var x = Math.floor((Math.random() * 900000) + 100000);
var num1 = [];

function sendmail(){
             
	        num1.push(x);
			var Body='Your Authentication Form Verification code is <br>OTP: '+x;
			Email.send({
                SecureToken:"9fe468fc-bcb6-449b-a3a1-ba86825ed5ba",
				To: storedName,
				From: "testinginfo0024@gmail.com",
				Subject: "Verification code from authentication form",
				Body: Body
			}).then(
				message =>{
					if(message=='OK'){
					alert('Your mail Otp has been send');
					}
					else{
						console.error (message);
						alert('There is error at sending Otp mail. ');
						
					}

				}
			);

}