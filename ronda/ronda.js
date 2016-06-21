var then = new Date("2015-12-10");
var now  = new Date();
var dday = Math.ceil((now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24));


$(document).ready(function(){
  $('body').text("D + " + dday);
});
