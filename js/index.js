$( document ).ready(function() {
	
  $('a[href$="index.html"]').on('click', function(event) {
		$('.below-head').remove();
		event.preventDefault();
	});
	var modal = document.getElementById('myModal');

	var span = document.getElementsByClassName("close")[0];

	span.onclick = function() {
		modal.style.display = "none";
	
	}
	var modalImg = document.getElementById("img01");
	var imgs = document.getElementsByClassName("jamie-img");

	var captionText = document.getElementById("caption");

	for (var i = 0; i < imgs.length; i++) {
		var img = imgs[i];
		img.onclick = function() {
			modal.style.display = "block";
			modalImg.src = this.src;
			modalImg.alt = this.alt;
			captionText.innerHTML = this.alt;
		}
	}
})
