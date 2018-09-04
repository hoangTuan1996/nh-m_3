$(document).ready(function() {
			$(' li.menu_item').hover(function() {
				$(this).children('ul').slideDown(300);
			}, function() {
				$(this).children('ul').hide();
			});	
});
 
$(document).ready(function() {
	var stt=0;
	starImg = $("img.slide:first").attr("stt");
	endImg = $("img.slide:last").attr("stt");
	$("img.slide").each(function() {
		if ($(this).is(':visible')) {
			stt = $(this).attr('stt');
		}
	});	
	$("#next").click(function(event) {
		if (stt==endImg) {
			stt=0;
		}
		next = ++stt;
		$("img.slide").hide();
		$("img.slide").eq(next).show();
	});
	$("#prev").click(function(event) {
		
		prev = --stt;
		$("img.slide").hide();
		$("img.slide").eq(prev).show();
	});
	setInterval(function(){
		$("#next").click();
	},2000);
});