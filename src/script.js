function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
    document.querySelector("body").classList.toggle("no-scroll");
}


$(document).ready(function () {
    $('.places-slider').slick({
        mobileFirst: false,
        prevArrow: ".places-slider-prev",
        nextArrow: ".places-slider-next",
        infinite: true,
        slidesToShow: 1,
        variableWidth: true,
    });

    $('.partners-slider').slick({
        mobileFirst: false,
        prevArrow: ".partners-slider-prev",
        nextArrow: ".partners-slider-next",
        infinite: true,
        slidesToShow: 1,
    });
    $('a').click(function () {
        if(this.href.includes("#")){
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        }
    });
});