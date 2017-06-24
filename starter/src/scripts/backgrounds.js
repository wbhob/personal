$(document).ready(() => {
  $('.background-image-holder').each(function () {
    var imgSrc = $(this).children('img').attr('src');
    $(this).css('background', 'url("' + imgSrc + '")').css('background-position', 'initial').css('opacity', '1');
  });
});
