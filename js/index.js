$( document ).ready(function() {
	
  $('a[href="portfolio.html"]').on('click', function(event) {
		$('.home').remove();
		event.preventDefault();
		$(".below-head").load("portfolio.html .portfolio");
	});
	
	$('a[href="contact.html"]').on('click', function(event) {
		$('.home').remove();
		event.preventDefault();
		$(".below-head").load("contact.html .contact");
	});
	$('a[href="index.html"]').on('click', function(event) {
		$('.home').remove();
		event.preventDefault();
		$(".below-head").load("index.html .home");
	});

		$('a.gallery').featherlightGallery({
    previousIcon: '&#9664',
    nextIcon: '&#965',
    galleryFadeIn: 300,

    openSpeed: 300
	});
})
