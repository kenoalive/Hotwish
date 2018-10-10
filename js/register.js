$(document).ready(function() {
  var email_Boolean = false;
  var user_Boolean = false;
var password_Boolean = false;
var confirm_Boolean = false;



  $("#email").blur(function() {
     if (((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($("#email").val()))){
    $('#email-alert').html("✔").css("color","green");
    user_Boolean = true;
  }else{
    $('#email-alert').html("✘").css("color","red");
    user_Boolean = false;
  }
  });

  $("#email").bind('input propertychange',function(){
        if (((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($("#email").val()))){
    $('#email-alert').html("✔").css("color","green");
    user_Boolean = true;
  }else{
    $('#email-alert').html("✘").css("color","red");
    user_Boolean = false;
  }
  });

  $('#username').bind('input propertychange',function(){
    if((/^[a-z0-9_-]{3,8}$/).test($("#username").val())){
    $('#user-alert').html("✔").css("color","green");
    user_Boolean = true;
  }else{
    $('#user-alert').html("✘").css("color","red");
    user_Boolean = false;
  }
  });


  $("#username").blur(function() {
    if((/^[a-z0-9_-]{3,8}$/).test($("#username").val())){
    $('#user-alert').html("✔").css("color","green");
    user_Boolean = true;
  }else{
    $('#user-alert').html("✘").css("color","red");
    user_Boolean = false;
  }
  });


// password
$("#password").bind('input propertychange',function(){
        if ((/^[a-z0-9_-]{6,20}$/).test($("#password").val())){
    $('#pwd-alert').html("✔").css("color","green");
    password_Boolean = true;
  }else{
    $('#pwd-alert').html("✘").css("color","red");
    password_Boolean = false;
  }
        });

$("#password").blur(function() {
    if((/^[a-z0-9_-]{6,20}$/).test($("#password").val())){
    $('#pwd-alert').html("✔").css("color","green");
    user_Boolean = true;
  }else{
    $('#pwd-alert').html("✘").css("color","red");
    user_Boolean = false;
  }
  });

// password_confirm

$("#re-password").bind('input propertychange',function(){
      if ((($("#re-password").val())==($("#password").val()))&&($("#re-password").val()!='')){
    $('#repwd-alert').html("✔").css("color","green");
    confirm_Boolean = true;
  }else {
    $('#repwd-alert').html("✘").css("color","red");
    confirm_Boolean = false;
  }
        });

$("#re-password").blur(function() {
    if((($("#re-password").val())==($("#password").val()))&&($("#re-password").val()!='')){
    $('#repwd-alert').html("✔").css("color","green");
    user_Boolean = true;
  }else{
    $('#repwd-alert').html("✘").css("color","red");
    user_Boolean = false;
  }
  });


//receive-captcha
$("#username,#password,#re-password").blur(function(){
   if((user_Boolean && password_Boolean && confirm_Boolean)==true){
      $('#receive-captcha').css({
        'cursor': 'pointer',
        'background-color': '#262626'
      });
   }else{
       $('#receive-captcha').css({
        'cursor': 'default',
        'background-color': '#d8d8d8'
      });
   }
});


// click
$('#submit').click(function(){
  
  if(!(user_Boolean && password_Boolean && confirm_Boolean)){
    alert("请完善信息");
  }
});

});
