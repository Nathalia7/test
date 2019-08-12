function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
    document.querySelector("body").classList.toggle("no-scroll");
}



const slider = tns({
    container: '.places-slider',
    items: 1.05,
    nav:false,
    prevButton:".carousel-control-prev",
    nextButton:".carousel-control-next"
});

const partnerSlider1 = tns({
    container: '.partners-slider1',
    items: 1,
    nav:false,
    prevButton:".partners-carousel-control-prev1",
    nextButton:".partners-carousel-control-next1"

});
const partnerSlider2 = tns({
    container: '.partners-slider2',
    items: 1,
    nav:false,
    prevButton:".partners-carousel-control-prev2",
    nextButton:".partners-carousel-control-next2"
});