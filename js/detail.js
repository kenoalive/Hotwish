$(document).ready(function() {
	//缩略图放大
	$('.small-img ul li').click(function() {
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.big-img img').attr('src', $(this).find('img').attr('big'));
	});
	//时间选择面板
	var timePanel = $('.time-options-panel')
	$('#time-options').click(function() {
		if(timePanel.css('display')=='none'){
			timePanel.show(300);
		}else{
			timePanel.hide(300);
		}
	});
	//选择按钮
	var selectList = $('.service-options, .merge-options, .type-options').find('li');
	var typeSelectData;
	var typeOptionData;
	selectList.each(function() {
		$(this).click(function() {
			$(this).addClass('selected').siblings('li').removeClass('selected');
		});
	});
	$('#service-options ul li').each(function() {
		$(this).click(function() {
			typeSelectData = $(this).text();
		});
	});
	$('#type-options ul li').each(function() {
		$(this).click(function() {
			typeOptionData = $(this).text();
		});
	});

	//获取这个月到下个月末的日期
	var currentYear= new Date().getFullYear();
    var currentMonth= new Date().getMonth()+1;  
    var currentDate= new Date().getDate();
    var lastDay = new Date(currentYear,currentMonth,0).getDate();
    var nextMouth = new Date(currentYear,currentMonth+1).getMonth();
    var nextDate = new Date(currentYear,currentMonth+1,0).getDate();
    var dateCount = [];
    var thisDayCount = lastDay-currentDate;
    for(var i=0;i<=thisDayCount;i++){
    	dateCount.push(currentMonth+'.'+currentDate);
    	currentDate++;
    }
    for(var j=1;j<=nextDate;j++){
    	dateCount.push(nextMouth+'.'+j);
    }
   	$.each(dateCount, function(i, val) {
    	$('#slide-date ul').append('<li>'+val+'</li>');
   	});
   	var ulLen = (dateCount.length)/5*290;
   	$('#slide-date ul').css('width', ulLen+'px');

	//日期滑动选择
	var dateList = $('#slide-date ul li');
	var nowleft = 0;
	var timeData;
	dateList.eq(0).addClass('selected');
	dateList.each(function() {
		if($(this).hasClass('selected')){
			timeData = $(this).text();
		}
		$(this).click(function() {
			$(this).addClass('selected').siblings().removeClass('selected');
			timeData = $(this).text();
		});
	});

	$('.arrowright').click(function() {
		nowleft = nowleft-290;
		if(nowleft<=-(ulLen-290)){
			$('.arrowright').removeClass('arrowright-ab').addClass('arrowright-disab');
		}
		if(nowleft>=-(ulLen-290)){
			$('#slide-date').children('ul').animate({left:nowleft}, 400);
		}
		if(nowleft<0){
			$('.arrowleft').removeClass('arrowleft-disab').addClass('arrowleft-ab');
		}
	});
	$('.arrowleft').click(function() {
		if(nowleft<=-290){
			console.log(nowleft);
			nowleft = nowleft+290;
			$('#slide-date').children('ul').animate({left:nowleft}, 400);
			if(nowleft>=0){
				$('.arrowleft').removeClass('arrowleft-ab').addClass('arrowleft-disab');
				return false;
			}
			if(nowleft>=-(ulLen-290)){
				$('.arrowright').removeClass('arrowright-disab').addClass('arrowright-ab');
			}
			return;
		}
	});

	//获取星期
	var weeks=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
	var cur = new Date().getDay();
	var curweek = weeks[new Date().getDay()];
	$('.Dayshow').text(curweek);
	dateList.each(function() {
		$(this).click(function() {
			var index = $(this).index();
			var cWeek = index + cur;
			curweek = cWeek%7;
			// curweek = week[$(this).index()%7];
			$('.Dayshow').text(weeks[curweek]);
		});
	});
	//预约时间
	var orderData = [];
	var timeList = $('.single-time-options ul li');
	timeList.each(function() {
		if($(this).hasClass('disabled')){
			$(this).append('<p>已预约</p>');
		}else if($(this).hasClass('enabled')){
			$(this).append('<p>可预约</p>');
			$(this).click(function() {
				if(!$(this).hasClass('selected')){
					$(this).addClass('selected');

					orderData.push($(this).text().substring(0,5));
				}else{
					$(this).removeClass('selected');
					orderData.splice($.inArray($(this).text().substring(0,5), orderData),1);
				}
			});
		}
	});
	//获取日期提交数据
	$('#time-confirm').click(function() {

		//判断提交是否合法
		if(orderData.length==0){
			alert("请选择服务时间");
		}else{
			var timeDataForm = timeData.split(".");
 			$('#time-options li').css({
 				'padding': '0px 25px',
 				'background-image': 'none'
 			});
			$('#time-options li').text(timeDataForm[0]+'月'+timeDataForm[1]+'日 '+orderData.join(" "));
			timePanel.hide(300);
		}

		
			
	});
	// 提交数据

	// 选择服务 typeSelectData
	// 服务日期 timeData
	// 服务具体时间 orderData
	// 拼单种类 typeOptionData
	

	//导航
	var navList = $('.nav-list li');
	var tabList = $('.tab');
	tabList.eq(0).show();

	navList.each(function() {
		$(this).click(function() {
			$(this).addClass('active').siblings('li').removeClass('active');
			var tabIndex = $(this).index();
			tabList.eq(tabIndex).show().siblings('.tab').hide();
			// tabList.each(function() {
			// 	if($(this).index()==tabIndex){
			// 		$(this).show().siblings().hide();
			// 	}
			// });
		});

	});

	//评价-专业程度 0~100
	function levelComment(lev){
		$('#level .color').css('width', lev+'px');
		$('#level .grey').css('width', 100-lev+4+'px');
		$('#level .c-score').text(lev);
	}
	//评价-服务态度 0~100
	function attiComment(atti){
		$('#attitude .color').css('width', atti+'px');
		$('#attitude .grey').css('width', 100-atti+4+'px');
		$('#attitude .c-score').text(atti);
	}
	
	
	
});