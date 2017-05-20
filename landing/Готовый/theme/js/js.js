(function ($) {

  $(document).ready(function () {
    $('.nav a, .btn-next, .section-top .btn-wrap a, .recall').bind("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });
    return false;
  });

  $(window).load(function () {
    $('.center-slider').slick({
      centerMode: true,
      autoplay: true,
      infinite: true,
      dots: true,
      autoplaySpeed: 3000,
      arrows:false,
      variableWidth: true,
      //centerPadding: '60px',
      slidesToShow: 1
    });
  });

  $(window).load(function () {
    var $btn = $('.header-wrapper .btn-menu');

    $btn.on('click touch', function (e) {
      e.preventDefault();

      $('body').toggleClass('mobile-active');
    })
  });

  $(window).load(function () {
    var $wrapper = $('.section-services'),
      $nav = $wrapper.find('.tab-nav li'),
      $content = $wrapper.find('.tab-content .items');

    $nav.eq(0).addClass('active');
    $content.eq(0).addClass('active');

    $nav.on('click touch', function (e) {
      e.preventDefault();

      var $index = $(this).index();

      if (!$(this).hasClass('active')) {
        $nav.removeClass('active');
        $(this).addClass('active');
        $content.removeClass('active');
        $content.eq($index).addClass('active');
      }
    })
  })

})(jQuery);

