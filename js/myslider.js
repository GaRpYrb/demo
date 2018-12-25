$(document).ready(function(){
  $('.ba-clients__slider').slick({
   "slidesToShow": 1, "slidesToScroll": 1,
   infinite: true,
   dots: true,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 6000,
   slide: 'div'
  });
});


$(document).ready(function(){
	$("div a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});