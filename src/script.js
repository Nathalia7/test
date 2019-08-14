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

    $('.partners-slider1').slick({
        mobileFirst: false,
        prevArrow: ".partners-slider-prev1",
        nextArrow: ".partners-slider-next1",
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.partners-slider2').slick({
        mobileFirst: false,
        prevArrow: ".partners-slider-prev",
        nextArrow: ".partners-slider-next",
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('a').click(function () {
        if(this.href.includes("#")){
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        }
    });
});