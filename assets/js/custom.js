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
    var heights = $( ".row-eq-height" ).map(function () {
        return $(this).height();
    }).get(),

        maxHeight = Math.max.apply(null, heights);

    $( ".row-eq-height" ).height(maxHeight);
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
  $(".dotted-svg, .border-svg, .thick-border-svg").each(function(index) {
    console.log($(this).width());

    var heading_area = $(this);
    var child_span = heading_area.find( 'span' );
    console.log(child_span)
    var header_area_width = heading_area.width();
    var header = $(this).find( '.heading-title' );
    var header_height = header.innerHeight();
    // Find width of each line by subtracting span width from entire width
    // and then divide by 2 for each side
    var svg_line_width = ( header_area_width - child_span.width() ) / 2;
    // create "percentage" value because our SVG width is 0 to 100
    var x2_value = ( svg_line_width / header_area_width ) * 100;

    // Create Unique Ids
    heading_area.attr( 'id', 'h_' + index );
    child_span.attr( 'id', 'span_' + index );
    
    var outer_margin = 30;
    if ( heading_area.hasClass( 'dotted-svg' ) ) {
      if ( heading_area.hasClass( 'link-svg' ) ) {
        x2_value_margin = 0;
      } else {
        x2_value_margin = 2;
      }
      var line1 = makeSVG( 'line', {
        x1: 0, 
        y1: 0.5, 
        x2: x2_value - x2_value_margin, // subtract two for margin
        y2: 0.5,
        'stroke-dasharray': '0 1.1',
        'stroke-width': '0.05rem',
        'stroke-dashoffset': '3'
      });
      var line2 = makeSVG( 'line', {
        x1: 100 - x2_value + 2, // add two for margin
        y1: 0.5, 
        x2: 100,
        y2: 0.5,
        'stroke-dasharray': '0 1.1',
        'stroke-width': '0.05rem',
        'stroke-dashoffset': '3'
      });
    } else if (heading_area.hasClass( 'border-svg' )) {
      var line1 = makeSVG( 'line', {
        x1: 0, 
        y1: 0.5, 
        x2: x2_value - 2, // subtract two for margin
        y2: 0.5,
        'stroke-width': '0.1',
      });
      var line2 = makeSVG( 'line', {
        x1: 100 - x2_value + 2, // add two for margin
        y1: 0.5, 
        x2: 100,
        y2: 0.5,
        'stroke-width': '0.1',
      });
      outer_margin = 0;
    } else if (heading_area.hasClass( 'thick-border-svg' )) {
      var line1 = makeSVG( 'line', {
        x1: 0, 
        y1: 0.5, 
        x2: x2_value - 2, // subtract two for margin
        y2: 0.5,
        'stroke-width': '0.15rem'
      });
      var line2 = makeSVG( 'line', {
        x1: 100 - x2_value + 2, // add two for margin
        y1: 0.5, 
        x2: 100,
        y2: 0.5,
        'stroke-width': '0.15rem'
      });
      outer_margin = 0;
    }
    
    
    var svg_el = makeSVG( 'svg', {
      viewBox: "0 0 100 1", 
      width: header_area_width - outer_margin, 
      height: header_height, 
      id: 'svg_' + index
    });
    svg_el.appendChild( line1 );
    svg_el.appendChild( line2 );
    document.getElementById( 'h_' + index ).insertAdjacentElement("afterbegin", svg_el);
    
  });

  
  
  
});