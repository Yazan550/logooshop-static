document.addEventListener("DOMContentLoaded", function () {
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slicknav !== 'undefined') {
    jQuery("#main-menu").slicknav({
      label: "القائمة",
      prependTo: ".mobile-menu",
      closeOnClick: true,
      allowParentLinks: true
    });
  }
});
