function validateForm(form) {
  var doc = document.forms["vl-form"]["honeypot"].value;

  if ( doc == "" || doc == null ) {
    // ignore if it is blank and submit the form
    form.action = "https://forms.zohopublic.com/virtualoffice9155/form/EmailSignatureContactForm/formperma/CFaunqNfMFTd-d2HSohJgZK-cgZ4jjssvvqFZL3lP58/htmlRecords/submit"
  } else {
    // go directly to thanks page without submitting 
    form.action = "https://awesomeinc.org/thanks"
    return false
  }
}