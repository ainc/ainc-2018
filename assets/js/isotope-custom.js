$(document).ready(function(){
  console.log("DOM LOADED");
  $('#gallery').imagesLoaded(function(){
    initGallery();
  });
  function initGallery(){
  	// isotope
      var $alumni = $('.alumnis');

  	$alumni.isotope({
  	  itemSelector : '.bootcampAlumni',
			layoutMode : 'fitRows'
  	});

  	$('#filters a').on("click", function(){
  	  var selector = $(this).attr('data-filter');
  	  $alumni.isotope({ filter: selector });
  	  return false;
  	});

  	$('select.filter').change(function(){
  		$("select option:selected").each(function () {
  			var selector = $(this).attr('data-filter');

  			$alumni.isotope({ filter: selector });
  			return false;
  		});
  	});
  }

});