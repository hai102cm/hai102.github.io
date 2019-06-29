// JavaScript Document
$(document).ready(function() {
    $("div.body > .right > ul.tab > li:first-child").addClass("mauNen");
	$("div.body > .right > div.tab > div:first-child").addClass("mauNen");
	$("div.body > .right > div.tab > div").not(":first").hide(); //Cho phép hiện thẻ div đầu tiên
	
	$("div.body > .right > ul.tab > li > a ").click(function(event) {
		
		event.preventDefault();
		
		$(this).parent().siblings().removeClass("mauNen");
		$(this).parent().addClass("mauNen");
		
		var tabId = $(this).attr("href");
		$("div.body > .right > div.tab > div").removeClass("mauNen").hide();
		$(tabId).addClass("mauNen").show();
	});
});