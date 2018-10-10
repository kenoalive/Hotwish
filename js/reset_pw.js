$(document).ready(function() {
	var email_Boolean = false;
	var password_Boolean = false;
	var confirm_Boolean = false;

	$("#email").bind('input propertychange',function(){
		if (((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($("#email").val()))){
			$('.eamil-alert').html("✔").css("color","green");
			email_Boolean = true;
		}else{
			email_Boolean = false;
		}
	});

	$("#email").blur(function() {
		if (((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($("#email").val()))){
			$('.eamil-alert').html("✔").css("color","green");
			email_Boolean = true;
		}else{
			$('.eamil-alert').html("✘").css("color","red");
			email_Boolean = false;
		}
	});
	$('#email').blur(function() {
		if(email_Boolean){
			$('.code-button').addClass('active');
		}
	 	//发送验证码


	 });

	 // password
	 $("#password").bind('input propertychange',function(){
	 	if ((/^[a-z0-9_-]{6,20}$/).test($("#password").val())){
	 		$('.pw-alert').html("✔").css("color","green");
	 		password_Boolean = true;
	 	}else{
	 		$('.pw-alert').html("✘").css("color","red");
	 		password_Boolean = false;
	 	}
	 });

	 $("#password").blur(function() {
	 	if((/^[a-z0-9_-]{6,20}$/).test($("#password").val())){
	 		$('.pw-alert').html("✔").css("color","green");
	 		user_Boolean = true;
	 	}else{
	 		$('.pw-alert').html("✘").css("color","red");
	 		user_Boolean = false;
	 	}
	 });

// password_confirm

$("#re-password").bind('input propertychange',function(){
	if ((($("#re-password").val())==($("#password").val()))&&($("#re-password").val()!='')){
		$('.confirm-alert').html("✔").css("color","green");
		confirm_Boolean = true;
	}else {
		$('.confirm-alert').html("✘").css("color","red");
		confirm_Boolean = false;
	}
});

$("#re-password").blur(function() {
	if((($("#re-password").val())==($("#password").val()))&&($("#re-password").val()!='')){
		$('.confirm-alert').html("✔").css("color","green");
		confirm_Boolean = true;
	}else{
		$('.confirm-alert').html("✘").css("color","red");
		confirm_Boolean = false;
	}
});

$('.confirm-btn').click(function(){

	if(!(email_Boolean&&password_Boolean&&confirm_Boolean)){
		alert("请完善信息");
	}
});





});