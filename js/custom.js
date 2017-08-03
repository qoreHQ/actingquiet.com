$(function() {
	

	// log window width
	// $(window).resize(function() {
	// 	console.log($(window).width());
	// });


	// Crazy float right fix
	$('body').hide(0, function(){
		$('body').show(0);
	});


	// Getit Show/Hide
	$('#crazy_content div').click(function() {
		$('#getit').fadeIn(300);
	});
	$('#getit').click(function() {
		$('#getit').fadeOut(300);
	});

	// About social toggle
	$('.circle_cont').mouseenter(function() {
		$(this).children('a').fadeIn(200);
	}).mouseleave(function() {
		$(this).children('a').fadeOut(200);
	});


	// Large type expand effect
	$('#large_text').hover(function() {
		$('#pascal_large_text div').animate({width:'693px'}, 700);
	});

	$('#large_text').click(function() {
		$('#pascal_large_text div').animate({width:'660px'}, 300, function() {
			$('#pascal_large_text div').animate({width:'693px'}, 300);
		});
	});

	
	// Quote show function
	$(window).scroll(function() {

		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			setTimeout(function() {
				$('#quote').show();
				$('body').css('margin-bottom', '440px');
			}, 1000);
		};

	});

	// About interactivity
	var aboutbox = $()
	$('.aboutbox').hover(function() {
		$(this).animate({
			'background-color': '#ccd6d1'
		}, 200);
	});
	$('.aboutbox').mouseleave(function() {
		$(this).animate({
			'background-color': '#d7e1dd'
		}, 200);
	});

	// SoundCloud flexslide
	$(window).load(function() {
		$('.flexslider').flexslider({
			directionNav: false
		});
	});

	// Logo spin touch
	$('#mainimg img').on({ 'touchstart' : function(){ 
		$(this).addClass('touchstart');
		setTimeout(function() {
			$('.touchstart').removeClass('touchstart')
		}, 700);
	} });

});




















