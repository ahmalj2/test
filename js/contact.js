$(window).ready(function(){
  $('.menu-toggle').click(function(){
    //console.log(2);
    $('.main-nav').toggleClass('main-nav-open',500);
    $(this).toggleClass('open');
  });
});


//checking the input of the name "text"

$("#fname").keyup(function() {
        var re = /^[A-Za-z]+$/;
        testInfo($('#fname').val(), re, ".answerFname");
    });

$("#lname").keyup(function() {
        var re = /^[A-Za-z]+$/;
        testInfo($('#lname').val(), re, ".answerLname");
    });

$("#gmail").keyup(function() {
      var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
      testInfo($('#gmail').val(), re, ".answerGmail");
  });
