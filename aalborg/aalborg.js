$(document).ready(function() {
  $('.heart').click(function() {
      $(this).toggleClass('heartAnimation');
    });

  $('input').keypress(function(e) {
    var value = $(this).val();
    if(e.which == 13) {
      $('.display-none').removeClass('display-none');
      $('span').text(value);
      $(this).val("");
    }
  })
});

