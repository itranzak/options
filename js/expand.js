$(document).ready(function() {
  $('.pnt-toggle').on('click', function() {
    $(this)
      .find('.itm-toggle')
      .slideToggle();
    // toggle open/close symbol
    if (
      $(this)
        .find('.itm a')
        .html() == '<span class="x-minus">-</span>'
    ) {
      $(this)
        .find('.itm a')
        .html('<span class="x-plus">+</span>');
    } else {
      $(this)
        .find('.itm a')
        .html('<span class="x-minus">-</span>');
    }
  });
});
