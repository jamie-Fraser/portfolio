$(document).ready(function() {
	
  $("a[href='portfolio.html']").on('click', function(event) {
		$('.home').remove();
		event.preventDefault();
		$(".belowHead").load('portfolio.html .portfolio');
	});
	
	$("a[href='contact.html']").on('click', function(event) {
		$('.home').remove();
		event.preventDefault();
		$(".belowHead").load('contact.html .contact');
	});
	
	$("a[href='index.html']").on('click', function(event) {
		$('.home').remove();
		event.preventDefault();
		$(".belowHead").load('index.html');
	});

		$('a.gallery').featherlightGallery({
    previousIcon: '&#10092',
    nextIcon: '&#10093',
    galleryFadeIn: 300,

    openSpeed: 300
	});
	
	$('.my-gallery').featherlightGallery({
    filter: "a",
    afterContent: function() {
		this.$legend = this.$legend || $('<div class="legend"/>').insertAfter(this.$content);
		this.$legend.text(this.$currentTarget.attr('alt'));
		
		$(".foo").backstretch([
			"home/jamie/web/portfolio/Portfolio Images/Digital/Portraits/rick.jpg",
			"home/jamie/web/portfolio/Portfolio Images/Digital/Portraits/tayah.jpg",
			"home/jamie/web/portfolio/Portfolio Images/Digital/Portraits/tyrion.jpg"    
			], {duration: 4000});
    }
	});
})

