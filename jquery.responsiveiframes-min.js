/*
    Library by Daniel Cohen Gindi (danielgindi@gmail.com)
    MIT License!
*/
(function(c){c(window).on("resize load",function(){c("iframe,embed").not(".no-aspect-ratio").each(function(){var a=c(this),b=parseFloat(a.css("width"))?a.width():Infinity,d=a.data("aspect-ratio");null==d&&(d=a.height()/a.width(),a.data("aspect-ratio",d).removeAttr("height").removeAttr("width").css({width:"",height:""}));b=Math.min(b,a.parent().width());a.width(b).height(b*a.data("aspect-ratio"))})})})(jQuery);
