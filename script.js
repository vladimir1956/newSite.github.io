jQuery(function($){
"use strict";
/*Header slider */
$('.home_slider').slick({
    vertical: true,
	arrows: false,
	dots: true
	});
/* Twitter slider */
$('.content_slider_tweeter').slick({
    vertical: true,
    appendArrows:$('.tweet_slider .arrows'),
    prevArrow:"<span class=\"top\"><i class=\"fas fa-arrow-up\"></i>",
    nextArrow:"<span class=\"down\"><i class=\"fas fa-arrow-down\"></i>"
  });
 /*Carousel Slider for shop Items */ 
if($('.shop_carousel').length){
$('.shop_carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows:$('.shop_slider_navigation'),
    prevArrow:"<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
    nextArrow:"<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>"
  });
}
if($('.testimonal_carusel').length){
$('.testimonal_carusel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows:$('.testimonial_slider_box'),
    prevArrow:"<div class=\"left_arrow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
    nextArrow:"<div class=\"right_arrow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>"
  });
$('.testimonal_carusel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(nextSlide);
  var tabs_container = $('.testimonial_tab_container');
  //var current_index = currentSlide;

  tabs_container.find($('.tab-item')).hide();
  //console.log($('.tab-' + current_index));
  tabs_container.find($('.tab-' +  nextSlide)).show();
});
}
	$('.open_video').magnificPopup({
  	   	  disableOn:0,
          alignTop: true,
          marTop: 0,
          marBottom: 0,
          closeBtnInside: true,
          mainClass: 'mfp-dark-close-button mfp-with-40-margin',
          preloader: false	
	});

 $('.testy_gallery').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
          } 
  });

   /* 
        $('.testimonial_gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
          }
        });
     */
    

}); 