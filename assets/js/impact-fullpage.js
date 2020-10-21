new fullpage('#fullpage', {
	//options here
    autoScrolling: true,
    navigation: true,
    controlArrows: false,
    slidesNavigation: true,
	  slidesNavPosition: 'bottom'
});

// Jquery Counter-Up from Codepen
$('.counter').counterUp({
    delay: 10,
    time: 2000
  });
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');