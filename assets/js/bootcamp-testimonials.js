$(document).on( 'click', '#bootcamp-grads-images > img', function (event) {
  var testimonial_id = $(this).data("testimonial");
  console.log(testimonial_id);
  active_testimonial_content_div = $( `bootcamp-grads-content [data-testimonial='${testimonial_id}']` ).addClass( 'active' );
  console.log(active_testimonial_content_div);
  console.log(jQuery.type($(this)))
  $( 'testimonial-window-text active' ).removeClass( 'active' );
  // $( active_testimonial_content_div ).addClass( 'active' );
});