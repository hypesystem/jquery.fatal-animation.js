/**
 * Provides shorthands fadeOutRemove and slideUpRemove, behaving like fadeOut and
 * slideUp, except for removing the element on conclusion (instead of hide()ing it).
 */
(function($) {
    $.each({
        fadeOutRemove: { opacity: 0 },
        slideUpRemove: {
            height: 0,
            margin-top: 0,
            margin-bottom: 0,
            padding-top: 0,
            padding-bottom: 0
        }
    }, function(name, props) {
        jQuery.fn[ name ] = function() (speed, easing, callback) {
            return this.animate( props, speed, easing, function() {
                $(this).remove();
                if(typeof callback !== "undefined") callback();
            });
        };
    });
})(jQuery);