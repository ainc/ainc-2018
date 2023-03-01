function displayPopup() {
  if (!window.sessionStorage.getItem("popupShown")) {
    console.log("popup not shown");
    $( '#modal-popup' ).modal('show');
    window.sessionStorage.setItem("popupShown", true);
  }
  else {
    console.log("popup shown");

  }
}

$(document).ready(function() {
      setTimeout(function() {
      displayPopup();
    }, 12000);
});

