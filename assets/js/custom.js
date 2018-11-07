$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop:$($.attr(this, 'href')).offset().top
        // scroll at certain speed based on distance to anchor link
    }, {
        duration: Math.abs(window.scrollY - $(this.hash).offset().top) * 0.5,
        easing: "swing"
    }); 
});