$(document).ready(function() {
	
	var totalAccount = 0;
	$('.payment-num').each(function() {
		totalAccount = totalAccount + parseInt($(this).text().replace('￥',''));
		
	});
	$('#account').text('￥'+totalAccount);
});