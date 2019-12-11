// Code from:
// http://mcgivery.com/htmlelement-pseudostyle-settingmodifying-before-and-after-in-javascript/
var UID = {
	_current: 0,
	getNew: function(){
		this._current++;
		return this._current;
	}
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	var _this = this;
	var _sheetId = "pseudoStyles";
	var _head = document.head || document.getElementsByTagName('head')[0];
	var _sheet = document.getElementById(_sheetId) || document.createElement('style');
	_sheet.id = _sheetId;
	var className = "pseudoStyle" + UID.getNew();
	
	_this.className +=  " "+className; 
	
	_sheet.innerHTML += "\n."+className+":"+element+"{"+prop+":"+value+"}";
	_head.appendChild(_sheet);
	return this;
};

/************************************
 * Click bootcamp grad image action
 */
$(document).on( 'click', '#bootcamp-grads-images > img', function (event) {
  var testimonial_id = $(this).data("testimonial");  
  var testimonial_window = document.getElementById("bootcamp-grads-content");
  var active_testimonial_content_div = $( `#bootcamp-grads-content [data-testimonial='${testimonial_id}']` );
  active_testimonial_content_div.siblings().removeClass( 'active' );
  active_testimonial_content_div.addClass( 'active' );
	$( this ).siblings().removeClass( 'active' );
	$( this ).addClass( 'active' );

  // Top Percentage offset based on which bootcamper is selected
  var triangle_locations = {
    "1": 5,
    "2": 41,
    "3": 76
  }
  var top_offset = triangle_locations[testimonial_id] + "%";
  testimonial_window.pseudoStyle( 'before', 'top', top_offset);
  
});

