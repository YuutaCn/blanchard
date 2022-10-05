/*Dropdown Menu*/
$('.filter-dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.filter-dropdown-menu').slideToggle(150);
});
$('.filter-dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.filter-dropdown-menu').slideUp(150);
});
$('.filter-dropdown .filter-dropdown-menu li').click(function () {
  $(this).parents('.filter-dropdown').find('span').text($(this).text());
  $(this).parents('.filter-dropdown').find('input').attr('value', $(this).attr('id'));
  setTimeout(() => {
    $(this).parents('.filter-dropdown-container').css('max-height', '120px');
  }, 300);
});
