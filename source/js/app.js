$(document).ready(function() {
    svg4everybody();

    function initSlide($slider, $arrows) {
        $slider.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            //speed: 600,
            //autoplay: true,
            //autoplaySpeed: 2000,
            dots: false,
            arrows: true,
            variableWidth: true,
            appendArrows: $arrows,
            nextArrow: '<span class="slick-arrow_next"></span>',
            prevArrow: '<span class="slick-arrow_prev"></span>'
        });
    };

    function initSlideCounter($slider, $sliderCount) {
        $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
            if (currentSlide == undefined || currentSlide == 0) {
                $sliderCount.text(1 + ' / ' + slick.slideCount / 3);
            } else {
                $sliderCount.text((currentSlide / 3) + 1 + ' / ' + slick.slideCount / 3);
            }
        });
    };

    initSlideCounter($('.slider__men'), $('.slider__men-count'));
    initSlide($('.slider__men'), $(".slider__men-nav"));

    initSlideCounter($('.slider__woman'), $('.slider__woman-count'));
    initSlide($('.slider__woman'), $(".slider__woman-nav"));

    $('.select').selectize();
});