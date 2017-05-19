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
 })

})(jQuery);

