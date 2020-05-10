$(document).ready(function () {
    $(".menu_btn").click(function () {
        $('.nav_list').toggleClass('nav_mobile');
    });
    $(".close").click(function () {
        $('.nav_list').toggleClass('nav_mobile nav_opened');
    });
});

