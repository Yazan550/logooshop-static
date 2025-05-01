document.addEventListener("DOMContentLoaded", function () {
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.waypoint !== 'undefined') {
    jQuery('.skill-percent').each(function () {
      var $this = jQuery(this);
      var percent = $this.data('percent');

      $this.css('width', '0%');

      $this.waypoint(function () {
        $this.animate({ width: percent + '%' }, 1500);
        this.destroy(); // تمنع التكرار عند التمرير
      }, { offset: '100%' });
    });
  }
});
