(function ($) {

$(window).load(function(){

  var $btn  = $('.recall'),
    $popup = $('.popup-wrapper'),
    $close = $('.bg-close');

  $btn.on('click touch', function(e){
    e.preventDefault();

    $popup.addClass('active');
  });

  $close.on('click touch', function(e){
    e.preventDefault();

    $popup.removeClass('active');
  })
})

})(jQuery);

