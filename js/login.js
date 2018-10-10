$(document).ready(function() {
	var user_boolean = false;
	var pwd_boolean =false;

	$("#username").focus(function() {
		$(this).blur(function(){
		if(($("#username").val())==""){
			$("#user-alert").text('✘请输入邮箱');

		}else{
			$("#user-alert").text('');
			user_boolean = true;

		}
		
	})
	});

	$("#password").focus(function() {
		$(this).blur(function(){
		if(($("#password").val())==""){
			$("#pwd-alert").text('✘请输入密码');

		}else{
			$("#pwd-alert").text('');
			pwd_boolean = true;
		}
		
	})
	});

	$('#submit').click(function() {
		
		
		if(!(user_boolean && pwd_boolean)){
		alert("请输入登录信息");
	}
	});

	

	
	
});