// preloader

$(window).on('load', function() {
	$('#status').fadeOut();
	$('#preloader')
		.delay(300)
		.fadeOut('slow');
});
