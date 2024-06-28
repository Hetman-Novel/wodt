// Action when an item appears on the screen
var windowHeight = $(window).height();
$(document).on('scroll', function () {
   $('.effectiveMarketing__progresBarFilling').each(function () {
      let self = $(this), height = self.offset().top + self.height();
      if ($(document).scrollTop() + windowHeight >= height) {
         self.removeClass('width-zero')
      }
   });
});
$(".data-width").each(function () {
   let attr = $(this).attr('data-width');
   $(this).animate({ width: '' + attr + '' }, 2000);
});