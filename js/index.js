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
  $.backstretch([ "img/Test/test1.jpg", "img/Test/test2.jpg", "img/Test/test3.jpg", "img/Test/test4.jpg" ],
                { duration : 5000, fade: 2000 });
})
