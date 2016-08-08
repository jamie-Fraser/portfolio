$( document ).ready(function() {
	
  $("a[href='.html']").on('click', function(event) {
		$('.home').remove();
		event.preventDefault();
		$(".belowHead").load('portfolio.html .portfolio');
	});
	

		$('a.gallery').featherlightGallery({
    previousIcon: '&#9664',
    nextIcon: '&#965',
    galleryFadeIn: 300,

    openSpeed: 300
	});
})
