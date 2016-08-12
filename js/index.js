$(document).ready(function() {

	$.featherlightGallery.prototype.afterContent = function() {
		var caption = this.$currentTarget.find('img').attr('alt');
		this.$instance.find('.caption').remove();
		$('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
	};
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
		$(".belowHead").load('index.html .home');
	});

	$("a[href='about.html']").on('click', function(event) {
		$('.home').remove();
		event.preventDefault();
		$(".belowHead").load('about.html .about');
	});
	$('a.gallery').featherlightGallery({
		previousIcon : '&#10092',
		nextIcon : '&#10093',
		galleryFadeIn : 300,

		openSpeed : 300
	});

	$('.my-gallery').featherlightGallery({
		filter : "a",
		afterContent : function() {
			this.$legend = this.$legend || $('<div class="legend"/>').insertAfter(this.$content);
			this.$legend.text(this.$currentTarget.attr('alt'));
		}
	});


$("body").vegas({
	delay: 7000,
	transitin: fade,
	transistionDuration: 2000,
	slides: [
			{ src: "/img/Test/test1.jpg" },
			{ src: "/img/Test/test2.jpg" },
			{ src: "/img/Test/test3.jpg" },
			{ src: "/img/Test/test4.jpg" }
    ]
});
});