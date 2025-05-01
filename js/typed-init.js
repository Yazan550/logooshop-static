// typed-init.js
document.addEventListener("DOMContentLoaded", function() {
  if (typeof jQuery !== 'undefined' && jQuery().typed) {
    $(".header-logo-desc p").typed({
      strings: [
        "شعارك الإحترافي الآن",
        "هوية بصرية مبتكرة",
        "رؤية تترجم نجاحك",
        "استراتيجيات ترفع المبيعات",
        "تصاميم تعزز الثقة"
      ],
      loop: true,
      startDelay: 1000,
      backDelay: 2000
    });
  }
});
