$( document ).ready(function() {
	
  $("a[href='portfolio.html']").on('click', function(event) {
		$('.home').remove();
		event.preventDefault();
		$(".belowHead").load('portfolio.html .portfolio');
	});
	

	$("a[href='index.html']").on('click', function(event) {
		$('.home').remove();
		event.preventDefault();
		$(".belowHead").load('index.html .home');
	});

		$('a.gallery').featherlightGallery({
    previousIcon: '&#9664',
    nextIcon: '&#965',
    galleryFadeIn: 300,

    openSpeed: 300
	});
})

	$("a[href='contact.html']").click(function(event) {
		$(".belowHead").load('contact.html .contact');
		event.preventDefault();
	
	});
	