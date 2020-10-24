new fullpage('#fullpage', {
	//options here
    autoScrolling: true,
    navigation: true,
    controlArrows: false,
    slidesNavigation: true,
	  slidesNavPosition: 'bottom'
});

// Jquery Counter-Up from Codepen

document.getElementById("something").addEventListener("scroll", counterUp);

function counterUp() {
  console.log("test");
  delay: 10;
  time: 2000;
}

// $('.counter').counterUp({
//   delay: 10,
//   time: 2000
// });



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

$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');



