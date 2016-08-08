$( document ).ready(function() {
	
  $("a[href='portfolio.html']").on('click', function(event) {
		$('.home').remove();
		event.preventDefault();
		$(".belowHead").load('portfolio.html .portfolio');
	});
	
	$("a[href='contact.html']").click(function() {
		$(".belowHead").load('contact.html .contact');
		
		return false;
	
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
