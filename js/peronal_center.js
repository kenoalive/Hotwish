$(document).ready(function() {
	$(".holder").jPages({
            containerID  : "itemContainer",
   first: '首页',
   last: '尾页',
   previous: '上页',
   next: '下页',
   perPage: 4,
   startPage: 1,
   
   animation: 'wobble',
   keyBrowse: true,
   
        });
});