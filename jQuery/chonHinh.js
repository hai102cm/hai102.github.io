// JavaScript Document
$(document).ready(function() {
	$("div.body > .right> .left5050 > div.tab > div").not(":first").hide(); //Cho phép hiện thẻ div đầu tiên
	
	$("div.body > .right> .left5050 > ul.tab > li > a ").click(function() {
		var tabId = $(this).attr("href");
		$("div.body > .right> .left5050 > div.tab > div").hide();
		$(tabId).show();
	});
});