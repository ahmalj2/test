  $(window).ready(function(){
  $('.menu-toggle').click(function(){
    //console.log(2);
    $('.main-nav').toggleClass('main-nav-open',500);
    $(this).toggleClass('open');
  });
});


//moving to the targeted element smoothely in 2 s
$("#home").click(function() {
    $('html,body').animate({
      scrollTop:$("#bild").offset().top}, 2000);
    });
//moving to the targeted element smoothely in 2 s
$("#about").click(function() {
      $('html,body').animate({
        scrollTop:$(".work").offset().top}, 2000);
      });
      //moving to the targeted element smoothely in 2 s
$("#oll").click(function() {
      $('html,body').animate({
        scrollTop:$("#wrap").offset().top}, 2000);
      });
      //moving to the targeted element smoothely in 2 s
$("#train").click(function() {
      $('html,body').animate({
        scrollTop:$(".couches").offset().top}, 2000);
      });

      //moving to the targeted element smoothely in 2 s
$("#top").click(function() {
      $('html,body').animate({
        scrollTop:$("header").offset().top}, 2000);
      });
