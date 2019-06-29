// JavaScript Document
$(document).ready(function() {
    $(window).scroll(function() {
		var height = $(window).scrollTop();
	
		if(height  > 163) {
		   $(".header").addClass('fix-top');
		   $("div.body > .left").addClass('fix-left-top');
		}
		else {
			$(".header").removeClass('fix-top');
			$("div.body > .left").removeClass('fix-left-top');
		}
	});
	
});
