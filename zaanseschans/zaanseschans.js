$(document).ready(function() {
  $("#carousel").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 2,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768, 1]
  });
});
