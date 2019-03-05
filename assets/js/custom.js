$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
        // scroll at certain speed based on distance to anchor link
    }, {
            duration: Math.abs(window.scrollY - $(this.hash).offset().top) * 0.5,
            easing: "swing"
        });
});

/* ----------------------------------------------------------------
    Make equal size columns across a row in bootstrap. Flexbox solutions to this break responsiveness. 
    https://stackoverflow.com/questions/23287206/same-height-column-bootstrap-3-row-responsive
-------------------------------------------------------------------*/

$(document).ready(function () {
    var heights = $(".row-eq-height").map(function () {
        return $(this).height();
    }).get(),

        maxHeight = Math.max.apply(null, heights);

    $(".row-eq-height").height(maxHeight);
});