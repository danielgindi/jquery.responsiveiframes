/*
    Library by Daniel Cohen Gindi (danielgindi@gmail.com)
    MIT License!
*/
(function(c){c(window).on("resize load",function(){c("iframe,embed").not(".no-aspect-ratio").each(function(){var a=c(this),b=a.data("aspect-ratio"),d=a.data("max-width");null==b&&(d=parseFloat(a.css("width"))?a.width():Infinity,b=a.height()/a.width(),a.data({"aspect-ratio":b,"max-width":d}).removeAttr("height").removeAttr("width").css({width:"",height:""}));b=Math.min(d,a.parent().width());a.width(b).height(b*a.data("aspect-ratio"))})})})(jQuery);
