$( document ).ready(function() {
	
	var trigger = $('.fixed-header ul li a'),
	conatainer = $('.belowHead');
	

	trigger.on('click', function() {
		var $this = $this.data('target');
		container.load(target + '.html')
		return false;
	}

		$('a.gallery').featherlightGallery({
    previousIcon: '&#9664',
    nextIcon: '&#965',
    galleryFadeIn: 300,

    openSpeed: 300
	});
})

