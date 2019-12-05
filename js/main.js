$(document).ready(function() {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear'
    });
});

$(document).ready(function() {
    $('.reviews-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<div class="slick-prev reviews-slider-prev"></div>',
        nextArrow: '<div class="slick-next reviews-slider-prev"></div>'
    });
});