var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
(function($) {
    
    $('.menu-wrap-off a').each(function(){
        var href = $(this).attr("href");
        if(href == "#"){
            $(this).addClass('hash');
        }else{
            $(this).removeClass('hash');
        }
    });

    $.fn.menumaker = function(options) {
      
      var mobile_menu_single = $(this), settings = $.extend({
        format: "dropdown",
        sticky: false
      }, options);

         return this.each(function() {
         mobile_menu_single.find('li ul').parent().addClass('has-sub');
         var multiTg = function() {
             mobile_menu_single.find(".has-sub").prepend('<span class="submenu-button"></span>');
             mobile_menu_single.find(".hash").parent().addClass('hash-has-sub');
             mobile_menu_single.find('.submenu-button').on('click', function() {
                 $(this).toggleClass('submenu-opened');
                 if ($(this).siblings('ul').hasClass('open-sub')) {
                     $(this).siblings('ul').removeClass('open-sub').hide('fadeIn');
                     $(this).siblings('ul').hide('fadeIn');                                     
                 }
                 else {
                     $(this).siblings('ul').addClass('open-sub').hide('fadeIn');
                     $(this).siblings('ul').slideToggle().show('fadeIn');
                 }
             });
         };

         if (settings.format === 'multitoggle') multiTg();
         else mobile_menu_single.addClass('dropdown');
         if (settings.sticky === true) mobile_menu_single.css('position', 'fixed');
        var resizeFix = function() {
             if ($( window ).width() > 991) {
                 mobile_menu_single.find('ul').show('fadeIn');
                 mobile_menu_single.find('ul.sub-menu').hide('fadeIn');
             }          
         };
         resizeFix();
         return $(window).on('resize', resizeFix);
         });
    };
})(jQuery);

(function($){
$(document).ready(function(){

$("#mobile_menu_single").menumaker({
   format: "multitoggle"
});

});
})(jQuery);

}

/*
     FILE ARCHIVED ON 15:27:12 May 27, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:48:27 May 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.507
  captures_list: 0.677
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.056
  esindex: 0.014
  cdx.remote: 14.328
  LoadShardBlock: 60.769 (3)
  PetaboxLoader3.datanode: 188.419 (5)
  PetaboxLoader3.resolve: 52.227 (2)
  load_resource: 189.544
  loaddict: 28.605
*/