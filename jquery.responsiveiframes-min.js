/*
 jquery.responsiveiframes
 git://github.com/danielgindi/jquery.responsiveiframes.git
*/
(function(c,a){"function"===typeof define&&define.amd?define("jquery.responsiveiframes",["jquery"],a):"object"===typeof exports?module.exports=a(require("jquery")):a(c.jQuery)})(this,function(c){c(window).on("resize load",function(){c("iframe,embed").not(".no-aspect-ratio").not(".disable-responsive-iframes").each(function(){var a=c(this);if(!a.parent().hasClass("backstretch-item")&&!a.closest("disable-responsive-iframes").length){var b=a.data("aspect-ratio"),d=a.data("max-width");null==b&&(d=parseFloat(a.css("width"))?
a.width():Infinity,b=a.height()/a.width(),a.data({"aspect-ratio":b,"max-width":d}).removeAttr("height").removeAttr("width").css({width:"",height:""}));b=Math.min(d,a.parent().width());a.width(b).height(b*a.data("aspect-ratio"))}})})});
