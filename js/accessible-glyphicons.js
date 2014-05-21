$(function() {
    jQuery('.glyphicon').each(function() {
        /*
         * The glyphicon needs to be formatted as follows.
         * <span class="glyphicon glyphicon-close" data-alt="close"></span>
         * 
         * The script takes the contents of the data-alt attribute and presents it as alternative content for screen reader users.
         * 
         */
        $(this).attr('aria-hidden', 'true'); // hide the pseudo-element from screen readers
        var alt = jQuery(this).data('alt') // get the data-alt attribute

        // if the data-alt attribute exists, write the contents of the attribute
        if (typeof alt !== "undefined") {
            // if the glyphicon font is loaded, write the contents of the data-alt to off-screen screen reader only text
            if ($(this).css('font-family') == 'ncsu-icons') {
                $(this).after('<span class="sr-only">' + alt + '</span>');
            } else { // if the glyphicon font is NOT loaded, write the contents of the data-alt to on-screen text because the font is not displaying correctly
                $(this).after('<span>' + alt + '</span>');
                $(this).addClass('sr-only'); // make the failing glyphicon hidden off screen so it will not confuse users
            }
        }
    });
})