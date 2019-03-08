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

/* ----------------------------------------------------------------
    SVG Solution for dotted lines surrounding headers
    https://stackoverflow.com/questions/3642035/jquerys-append-not-working-with-svg-element
-------------------------------------------------------------------*/
function makeSVG(tag, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var k in attrs) {
    el.setAttribute(k, attrs[k]);
  }
  return el;
};

$(document).ready(function() {
  $(".dotted > span").each(function(index) {
    console.log($(this).width());
    $(this).attr("id", "svg_" + index);
    var line = makeSVG('line', {x1: 0.5, y1: 0, x2: 0.5, y2: 100});
    document.getElementById('svg_' + index).appendChild(line);
    
  });
  
  
});