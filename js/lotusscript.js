// Crazy float right fix
$('body').hide(0, function(){
	$(this).show(0);
});


// Pageswitcher
$('nav span').click(function(){
	var listItem = $(this);
	var page = $("#" + listItem.attr("data_page"));
	listItem.attr("style", "pointer-events:none;");
	$('.currentpage').slideUp(500, function(){
		$(this).removeClass("currentpage");
		page.addClass("currentpage");
		page.slideDown(500, function(){
			listItem.attr("style", "pointer-events:auto;");
		});
	});
});

// About overlay
$('.aboutbox').click(function() {
	$(this).children().fadeToggle(500);
});

// // Embed fixes
// $('.cookiePolicy').hide;

// $('#frontPage iframe').ready(function(){
//     $('#frontPage iframe').contents().html('Hey, i`ve changed content of <body>! Yay!!!');
// });

// var $head = $("#eFormIFrame").contents().find("head");
// $head.append($("<link/>", { rel: "stylesheet", href: "../style.css", type: "text/css" }));