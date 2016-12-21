$(document).ready(function () {
  $("button").mouseenter(function(){
    $(this).fadeTo("fast", 0.4);});
  $("button").mouseleave(function(){
    $(this).fadeTo("fast", 1);})
  $(".slideDown").slideDown("slow");
});
