$(document).ready(function() {
    $(".button-collapse").sideNav();

    Materialize.updateTextFields();

    $(".login").on("click",function() {
      $("#signup-Form").hide();
      $("#login-Form").show();
    });

    $(".signup").on("click",function() {
      $("#login-Form").hide();
      $("#signup-Form").show();
    });
    
  });
