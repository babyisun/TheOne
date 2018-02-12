(function($) {
    // 回到顶部
    (function() {
        let to_top = $('#to-top');
        $(window).on('scroll', function(){
            if ($(this).scrollTop() > 100) {
                to_top.fadeIn(100);
            } else {
                to_top.fadeOut(100);
            }
        });
        to_top.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 300);
            return false;
        });
    })();
})(jQuery);