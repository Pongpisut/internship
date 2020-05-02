$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2300,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});

$(document).ready(function() {
  $(".service").owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2300,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});
