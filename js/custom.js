// Navigation
$(function() {	
	var $el, leftPos;
		$navigation = $("#navid");    

	$navigation.append("<li id='transid'></li>");
	
	var $transition = $("#transid");
	
	$transition
		.width($(".current").width())
		.height($navigation.height())
		.css("left", $(".current a").position().left)
		.data("leftData", $(".current a").position().left);
	
	$("#navid a").hover(function() {
		$el = $(this);
		leftPos = $el.position().left;
		$transition.stop().animate({
			left: leftPos,
		})
	}, function() {
		$transition.stop().animate({
			left: $transition.data("leftData"),
		});
	});
	
	$(".current a").mouseenter(); /* IE */

	$('#a, #h, #i').hover(function() {
		$(this).animate({color: "#404041"}, 0);
		$('.current a').animate({color: "#ffffff"}, 0);
	}).mouseleave(function() {
		$(this).animate({color: "#ffffff"}, 0);
		$('.current a').animate({color: "#404041"}, 0);
	});
});


$(function() { 
	// Copyright positioner
	// var content = $("body");
	// content.css("padding-bottom", document.height - content.height() - $('footer').height() + "px");

	// console.log($('footer div').height());

	// var hoydeCont = content.height(),
	// 	hoydeBody = document.height,
	// 	hoydePad = hoydeBody - hoydeCont;

	// console.log("Content is " + hoydeCont + "px high.");
	// console.log("Body is " + hoydeBody + "px high.");
	// console.log("padding-bottom should be " + hoydePad + "px");


	// Image fader
	$('.opertus, a .opertus').show();
	
	$('.fade').cycle({
		fx:      'fade', 
		timeout:  5000
	});


	// Language switcher
	$('.nor').click(function() {
		$('#lange').hide();
		$('#langn').show();
	});
	
	$('.eng').click(function() {
		$('#langn').hide();
		$('#lange').show();
	});


	// // Music player
	// var song = new Audio('lucky.mp3','lucky.ogg');
	
	// if (song.canPlayType('audio/mpeg;')) {
	// 	song.type= 'audio/mpeg';
	// 	song.src= 'music/lucky.mp3';
	// } else {
	// 	song.type= 'audio/ogg';
	// 	song.src= 'music/lucky.ogg';
	// }
	
	// $('.play').click(function() {
	// 	song.play();
	// 	$('.play').hide();
	// 	$('.pause').show();
	// });
	
	// $('.pause').click(function() {
	// 	song.pause();
	// 	$('.pause').hide();
	// 	$('.play').show();
	// });
});