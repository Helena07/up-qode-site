$(document).ready(function () {
    $('.dropdown').mouseover(function () {
        $('.dropdown_main_menu').show();
    })
    $('.dropdown').mouseleave(function () {
        $('.dropdown_main_menu').hide();
    })
    
    $('.sub_menu').mouseover(function () {
        $('.dropdown_sub_menu').show();
    })
    
    $('.sub_menu').mouseleave(function () {
        $('.dropdown_sub_menu').hide();
    })
})