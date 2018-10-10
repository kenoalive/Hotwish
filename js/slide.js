$(document).ready(function() {

	var bWidth = window.screen.width;
	if(bWidth<=1100){
		bWidth=1100;
	}
	$('.banner-con').css('width',4*bWidth+'px' );
	$('.banner-con>li').css('width', bWidth+'px');


	
	var sWidth = bWidth;
	 var len = 4;
	 var timer;
	 var index = 0;

	 $('#focus ul li').click(function(){
 	index = $('#focus ul li').index(this);
 	showPic(index);
	 }).eq(0).trigger('click');
	 
	

	// 定时器，定时进行切换
	 $('.top-banner').hover(function(){
	 	clearInterval(timer);
	    },function(){
		 	timer = setInterval(function(){
		 	showPic(index);
		 	index++;
		 	if(index == len){index = 0;}
	        },3000);
	 }).trigger('mouseleave');

	 function showPic(index){
	 	var nowLeft = -index * sWidth;
	 	$('.banner-con').stop(true,false).animate({left:nowLeft},500);
	 	$('#focus ul li').removeClass('cur').eq(index).addClass('cur');
	 }

});