(function ($) {

 $(window).load(function(){

   var $wrapper = $('.b-accordion'),
     $items = $wrapper.find('.title');

   $items.on('click touch', function(e){
     e.preventDefault();

     if( $(this).parent().hasClass('active')){
       $(this).parent().removeClass('active');
     }else{
       $items.parent().removeClass('active');
       $(this).parent().addClass('active');
     }
   })
 });

  $(window).load(function(){
    var $btns = $('.b-course-program .title'),
      $items = $('.b-course-program .items-list > li');

    $btns.on('click touch', function(e){
      e.preventDefault();
      var $this = $(this),
        $parent = $this.parent();

      if($parent.hasClass('active')){
        $items.removeClass('active');
      }else{
        $items.removeClass('active');
        $parent.addClass('active');
      }

    })
  });

  $(window).load(function(){
    var $wrapper = $('.b-program-learning'),
      $elems = $wrapper.find('.progress'),
      $count = $wrapper.find('.item .img');

    for(var j = 0; j<$elems.length; j++){
      var $radiusEl = $count.eq(j).data('count')*900/100;

      $count.eq(j).find('circle').css('stroke-dasharray', $radiusEl+',900');
    }

      for(var i = 0; i<$elems.length; i++){

        var $widthEl = ($elems.eq(i).data('progress')*100)/$elems.eq(i).data('total');

        $elems.eq(i).width($widthEl+"%");
      }
  });

  $(window).load(function(){
    var loader = document.getElementById('loader')
      , border = document.getElementById('border')
      , α = 80
      , π = Math.PI
      , t = 30;

    (function draw() {
      α++;
      α %= 360;
      var r = ( α * π / 180 )
        , x = Math.sin( r ) * 125
        , y = Math.cos( r ) * - 125
        , mid = ( α > 180 ) ? 1 : 0
        , anim = 'M 0 0 v -125 A 125 125 1 '
          + mid + ' 1 '
          +  x  + ' '
          +  y  + ' z';
      //[x,y].forEach(function( d ){
      //  d = Math.round( d * 1e3 ) / 1e3;
      //});

      //loader.setAttribute( 'd', anim );
      //border.setAttribute( 'd', anim );

      //setTimeout(draw, t); // Redraw
    })();
  })

})(jQuery);

