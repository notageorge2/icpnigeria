// $('ul.nav li.dropdown').hover(function() {
//     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
//   }, function() {
//     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
//   });

  $("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  