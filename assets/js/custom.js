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

function parseSVG(s) {

}

$(document).ready(function() {
  $(".dotted").each(function(index) {
    console.log($(this).width());
    var child_span = $(this).children('span');
    child_span.attr("id", "span_" + index);
    var lgx_heading = $(this).parents('.lgx-heading-area');
    lgx_heading.attr("id", "h_" + index);
    
    var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var whitespace_width = viewport_width - child_span.width();
    var offset_width = child_span.width() / 2;
    var calc_width = whitespace_width / 2;
    var line = makeSVG('line', {
      x1: 0, 
      y1: 0.5, 
      x2: 100, 
      y2: 0.5,
      'stroke-dasharray': '1 5',
      'stroke-width': '5%'
    });
    var svg_el = makeSVG('svg', {
      viewBox: "0 0 100 1", 
      width: lgx_heading.width(), 
      height: $(this).height(), 
      id: 'svg_' + index
    });
    svg_el.appendChild(line);
    document.getElementById('h_' + index).insertAdjacentElement("afterbegin", svg_el);
    
  });
  
  
});