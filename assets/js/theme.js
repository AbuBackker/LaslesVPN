(function ($) {
  "use strict";

  // Menu Scrolling Handler

  var $window = $(window);
  function menuScrollHandler() {
    if ($(document).scrollTop() > 86) {
      $("#menu ").addClass("scrolling ");
    } else {
      $("#menu ").removeClass("scrolling ");
    }
  }

  function scrollUpHandler() {
    if ($(document).scrollTop() > 400) {
      $(".scrollup-btn").show();
    } else {
      $(".scrollup-btn").hide();
    }
  }

  $window.on("scroll ", function () {
    menuScrollHandler();
    scrollUpHandler();
  });

})(jQuery);
