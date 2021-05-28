$(document).ready(function() {
	$('#login').click(function(){
		window.open("http://www.baidu.com");
	})
	if(window.screen.width>=1280){
		$(window).scroll(function() {
		/* Act on the event */
		var top =$(document).scrollTop();

		// var sidebar = $('.select-list').offset().top;
		
		if(top>=1140&&top<6333){
			$('#sidebar').css({
				"position": 'fixed',
				'top': '10px'
			});

		}else if(top<1140){
			$('#sidebar').css({
				"position": 'absolute',
				'top': '1140px'
			});
		}else if(top>6333){
			$('#sidebar').css({
				"position": 'absolute',
				'top': '6333px'
			});
		}

		$("#gotop").click(function(){
   		var sc=$(window).scrollTop();
   		$('body,html').animate({scrollTop:0},0);
 		})

	});
	}else if(window.screen.width<1280){
		$('#sidebar').css('display', 'none');
	}


	$(".mask-over").mouseenter(function() {
		$(this).parent().children('.model-mask').show();
	});

	
	$(".model-mask").mouseleave(function() {
		$(this).hide();
	});

	
	
});