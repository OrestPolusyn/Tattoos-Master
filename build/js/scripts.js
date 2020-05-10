"use strict";

$(document).ready(function () {
  $(".menu_btn").click(function () {
    $('.nav_list').toggleClass('nav_mobile');
  });
  $(".close").click(function () {
    $('.nav_list').toggleClass('nav_mobile nav_opened');
  });
});
"use strict";

$(function () {
  $("#contact").click(function () {
    $('html, body').animate({
      scrollTop: $(".contacts").offset().top - 70
    }, 1000);
  });
});
"use strict";

jQuery(document).ready(function () {
  jQuery(".fancybox").fancybox();
});