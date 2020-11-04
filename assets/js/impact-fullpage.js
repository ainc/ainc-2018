new fullpage('#fullpage', {
	//options here
    autoScrolling: true,
    navigation: true,
    controlArrows: false,
    slidesNavigation: true,
	  slidesNavPosition: 'bottom'
});

// Jquery Counter-Up from Codepen

// document.getElementById("something").addEventListener("scroll", counterUp);
// window.addEventListener("scroll", function () {
//   console.log("test");
// });

// function counterUp() {
//   console.log("test");
//   delay: 10;
//   time: 2000;
// }



$("div").scroll(function() { 
  $('.counter').counterUp( {
    delay: 10,
    time: 2000
  });
});

// $('.counter').counterUp({
//   delay: 10,
//   time: 2000
// });
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');


/*
$(".section").scroll() {
  $(this).child(".counter").counterUp({

  })
}
*/
// $("#apax").scroll() {


//   $('#apax .counter').counterUp({
    
//       delay: 10,
//       time: 2000
//     });
// }

// $("#aincu").scroll() {


//   $('#aincu .counter').counterUp({
//       delay: 10,
//       time: 2000
//     });
// }



