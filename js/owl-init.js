document.addEventListener("DOMContentLoaded", function () {
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.owlCarousel !== 'undefined') {
    jQuery(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      rtl: document.documentElement.dir === "rtl"
    });
  }
});
