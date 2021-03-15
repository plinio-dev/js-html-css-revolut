// $('#plans').click(function() {
//   $(".sub-1").slideToggle();
//
// });

$('.ul-b li').mouseenter(function() {
  $(this).children('.sub-1, .sub-2, .sub-3 ').slideToggle();
});

$('.ul-b li').mouseleave(function() {
  $(this).children('.sub-1, .sub-2, .sub-3 ').slideToggle();
});
