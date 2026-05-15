var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/**
*
* --------------------------------------------------------------------
*
* Template : RSAddon Plugin Js
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* --------------------------------------------------------------------
*
**/
(function($) {
    "use strict";  
    // magnificPopup init

    
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();         
    }); 

    if ($('.js-tilt').length) {
        $('.js-tilt').tilt({})
    }

    $.fn.skillBars = function( options ) {
 
        var settings = $.extend({
            from: 0,            // number start
            to: false,          // number end
            speed: 1000,        // how long it should take to count between the target numbers
            interval: 100,    // how often the element should be updated
            decimals: 0,          // the number of decimal places to show
            onUpdate: null,   // callback method for every time the element is updated,
            onComplete: null,     // callback method for when the element finishes updating
            /*onComplete: function(from) {
                console.debug(this);
            }*/
            classes:{
                skillBarBar : '.skillbar-bar',
                skillBarPercent : '.skill-bar-percent',
            }
        }, options );
 
        return this.each(function(){
            
            var obj = $(this),
                to = (settings.to != false) ? settings.to : parseInt(obj.attr('data-percent'));
                if(to > 100){
                    to = 100;
                };
            var from = settings.from,
                loops = Math.ceil(settings.speed / settings.interval),
                increment = (to - from) / loops,
                loopCount = 0,
                interval = setInterval(updateValue, settings.interval);
            
            obj.find(settings.classes.skillBarBar).animate({
                width: parseInt(obj.attr('data-percent'))+'%'
            }, settings.speed);
                        
            function updateValue(){
                from += increment;
                loopCount++;
                $(obj).find(settings.classes.skillBarPercent).text(from.toFixed(settings.decimals)+'%');

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(obj, from);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    from = to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(obj, from);
                    }
                }
            }
            
        });
 
    };    
    
})(jQuery);  
}

/*
     FILE ARCHIVED ON 15:27:32 May 27, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:48:27 May 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.533
  captures_list: 0.577
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.048
  esindex: 0.009
  cdx.remote: 5.955
  LoadShardBlock: 64.15 (3)
  PetaboxLoader3.datanode: 68.047 (5)
  PetaboxLoader3.resolve: 169.485 (2)
  load_resource: 213.623
  loaddict: 36.77
*/