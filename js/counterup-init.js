document.addEventListener("DOMContentLoaded", function () {
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.counterUp !== 'undefined') {
    jQuery('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  }
});
