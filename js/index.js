$(document).ready(function() {
	$(".belowHead").load("index.html");
	



		$('a.gallery').featherlightGallery({
    previousIcon: '&#9664',
    nextIcon: '&#965',
    galleryFadeIn: 300,

    openSpeed: 300
	});
})

	
	$("a[href$='.html']").click(function() {
		var page = $(this).attr("href");
		$(".belowHead").load(page);
		
		return false;
	});