"use strict";

// add dark mode
function addDarkmodeWidget() {
  const options = {
    bottom: '30px', 
    right: '30px', 
    left: 'unset', 
    time: '0.5s', 
    mixColor: '#fff', 
    backgroundColor: '#fff',  
    buttonColorDark: '#100f2c',  
    buttonColorLight: '#fff', 
    saveInCookies: false, 
    label: '🌓', 
    autoMatchOsTheme: true 
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

(function ($) {
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ?
        target :
        $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });
})(jQuery);
