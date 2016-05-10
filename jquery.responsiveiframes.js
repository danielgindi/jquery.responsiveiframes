// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url https://raw.githubusercontent.com/google/closure-compiler/master/contrib/externs/jquery-1.9.js
// ==/ClosureCompiler==
/** @preserve    Library by Daniel Cohen Gindi (danielgindi@gmail.com)
    MIT License!
*/
(function ($) {
    
    $(window).on('resize load', function() {
          
        $('iframe,embed').not('.no-aspect-ratio').each(function() {
            
            var $el = $(this);
            var aspectRatio = $el.data('aspect-ratio'), maxWidth = $el.data('max-width');
            
            if (aspectRatio == null) {
                
                maxWidth = parseFloat($el.css('width'))
                    ? $el.width()
                    : Infinity;
                
                aspectRatio = $el.height() / $el.width();
                
                $el.data({ 'aspect-ratio': aspectRatio, 'max-width': maxWidth })
                    .removeAttr('height')
                    .removeAttr('width')
                    .css({ 'width': '', 'height': '' });
            }
            
            var width = Math.min(maxWidth, $el.parent().width());
            $el
                .width(width)
                .height(width * $el.data('aspect-ratio'));
                
        });
        
    });
    
})(jQuery);
