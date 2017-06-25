(function () {
  'user strict';
  let hello = $('.cover .container'),
    image = $('.cover .background-image-holder'),
    windowHeight = window.innerHeight / 2,
    isScroll = false,
    currentScroll = windowHeight;
  console.log(currentScroll);

  var latestScroll = 0;
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  window.requestAnimationFrame = requestAnimationFrame;

  var init = function () {
    window.addEventListener('scroll', function () {
      latestScroll = window.scrollY;
      checkScroll();
    }, false);
    update();
  };

  var checkScroll = function () {
    if (!isScroll) {
      window.requestAnimationFrame(update);
    }
    isScroll = true;
  };

  var update = function () {
    currentScroll = latestScroll;
    isScroll = false;
    var helloScroll = (currentScroll / 4) - (windowHeight / 2),
      blurScroll = currentScroll * 6;
    console.log('helloScroll', helloScroll);
    hello.css({
      'transform': 'translate3d(-50%, ' + helloScroll + 'px, 0)',
      'opacity': (windowHeight / (blurScroll || 1) - .1).toFixed(3)
    });
    if (image.css('opacity') >= 1) {
      image.css('opacity', 1);
    }
  };

  init();
})();
