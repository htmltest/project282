jQuery(window).on('load resize', function() {
    jQuery('#featured-post').each(function() {
        var curList = jQuery(this);

        curList.find('.entry-title').css({'min-height': '0px'});

        curList.find('.entry-title').each(function() {
            var curBlock = jQuery(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.entry-title').each(function() {
                var otherBlock = jQuery(this);
                if (otherBlock.offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });
});