$(function(){

    initial();
    function initial(){
        var screenH = $(window).height(),
        screenW = $(window).width(),
        barLeft = $('.bar-left'),
        barRight = $('.bar-right');
        barLeft.css('height',screenH-40+'px');
        barRight.css('height',screenH-50+'px');
    }
})