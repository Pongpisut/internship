jQuery(document).ready(function ($) {
  $(".loop-submenu").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      600: {
        items: 4,
      },
    },
  });
});

function Showmenu(m) {
  m.classList.toggle("change");
}

$(document).ready(function () {
  $(".toggles").on("click", function () {
    $(".navbar ul").toggleClass("open");
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $("#toTop").fadeIn();
  } else {
    $("#toTop").fadeOut();
  }
});
$("#toTop").click(function () {
  //1 second of animation time
  //html works for FFX but not Chrome
  //body works for Chrome but not FFX
  //This strange selector seems to work universally
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
