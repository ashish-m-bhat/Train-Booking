$(document).ready(function(){

		$("#registerButton").click(function()
		{
			window.location.replace("http://localhost/awp/register.html");
		  
		}); 


			$("#login").click(function(){
					var email = $("#email").val();
					var password = $("#password").val();
					
					if( email =='' || password =='')
					{
						$('input[type="text"],input[type="password"]').css("border","2px solid red");
						$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
						alert("Please fill all fields...!!!!!!");
					}else {
					$.post("login.php",{ email1: email, password1:password},
					function(data) {
					if(data=='Invalid Email.......') {
							$('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
							$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
							alert(data);
					}else if(data=='Email or Password is wrong...!!!!'){
					$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
					alert(data);
					} else if(data=='Successfully Logged in...')
					{
							$("form")[0].reset();
							$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
							alert("Successful");
							window.location.replace("http://localhost/awp/takeInput.html");} else{
					alert(data);
					}
					});
					}
			});
});


