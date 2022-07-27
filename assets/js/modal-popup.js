function displayPopup() {
  $( '#modal-popup' ).modal('show');
}

$(document).ready(function() {
  setTimeout(function() {
    displayPopup();
  }, 12000);
});

