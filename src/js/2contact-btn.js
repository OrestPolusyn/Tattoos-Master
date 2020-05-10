$(function() {

    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $(".contacts").offset().top - 70
        }, 1000);
    })

});