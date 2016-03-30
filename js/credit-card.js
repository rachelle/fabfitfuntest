
(() => {
  $('#submit-button').click((data) => {
    data.preventDefault()
    checkCreditForExpiration()
  })

  function checkCreditForExpiration() {
    var creditCardMonth = $('#credit-card-month').val()
    var creditCardYear = $('#credit-card-year').val()
    var combinedDate = creditCardYear + creditCardMonth
    var formattedCreditCardDate = moment(combinedDate, 'YYYY-MM')
    if (moment().isAfter(formattedCreditCardDate)) {
      $('#credit-card-warning').show()
      $('#credit-card-success').hide()
    }
    else {
      if($("#credit-card-warning").is(":visible")) {
        $('#credit-card-success').show()
        $('#credit-card-warning').hide()
      }
      else {
        $('#credit-card-success').show()
      }
    }
  }
})();