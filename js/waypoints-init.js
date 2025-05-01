document.addEventListener("DOMContentLoaded", function () {
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.waypoint !== 'undefined') {
    jQuery('.counter').each(function () {
      const $el = jQuery(this);
      $el.waypoint(function () {
        if (typeof jQuery.fn.counterUp === 'function') {
          $el.counterUp({
            delay: 10,
            time: 1000
          });
        }
        this.destroy(); // لتشغيلها مرة واحدة فقط
      }, { offset: '100%' });
    });
  }
});
