/*
 jquery.responsiveiframes
 git://github.com/danielgindi/jquery.responsiveiframes.git
*/
function c(d){d(window).on("resize load",function(){d("iframe,embed").not(".no-aspect-ratio").each(function(){var a=d(this),b=a.data("aspect-ratio"),e=a.data("max-width");null==b&&(e=parseFloat(a.css("width"))?a.width():Infinity,b=a.height()/a.width(),a.data({"aspect-ratio":b,"max-width":e}).removeAttr("height").removeAttr("width").css({width:"",height:""}));b=Math.min(e,a.parent().width());a.width(b).height(b*a.data("aspect-ratio"))})})}
"function"===typeof define&&define.a?define("jquery.responsiveiframes",["jquery"],c):"object"===typeof exports?module.b=c(require("jquery")):c(this.jQuery);
