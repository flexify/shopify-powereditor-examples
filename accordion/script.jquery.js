$(document).ready(function() {
  $(".accordion .accord-header").click(function() {
    if($(this).next("div").is(":visible")){
      $(this).next("div").slideUp("slow");
    } else {
      $(".accordion .accord-content").slideUp();
      $(this).next("div").slideToggle();
    }
  });
});