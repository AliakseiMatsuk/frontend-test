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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgc3ZnNGV2ZXJ5Ym9keSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTbGlkZSgkc2xpZGVyLCAkYXJyb3dzKSB7XHJcbiAgICAgICAgJHNsaWRlci5zbGljayh7XHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAvL3NwZWVkOiA2MDAsXHJcbiAgICAgICAgICAgIC8vYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIC8vYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkYXJyb3dzLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8c3BhbiBjbGFzcz1cInNsaWNrLWFycm93X25leHRcIj48L3NwYW4+JyxcclxuICAgICAgICAgICAgcHJldkFycm93OiAnPHNwYW4gY2xhc3M9XCJzbGljay1hcnJvd19wcmV2XCI+PC9zcGFuPidcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNsaWRlQ291bnRlcigkc2xpZGVyLCAkc2xpZGVyQ291bnQpIHtcclxuICAgICAgICAkc2xpZGVyLm9uKCdpbml0IHJlSW5pdCBhZnRlckNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA9PSB1bmRlZmluZWQgfHwgY3VycmVudFNsaWRlID09IDApIHtcclxuICAgICAgICAgICAgICAgICRzbGlkZXJDb3VudC50ZXh0KDEgKyAnIC8gJyArIHNsaWNrLnNsaWRlQ291bnQgLyAzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRzbGlkZXJDb3VudC50ZXh0KChjdXJyZW50U2xpZGUgLyAzKSArIDEgKyAnIC8gJyArIHNsaWNrLnNsaWRlQ291bnQgLyAzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbml0U2xpZGVDb3VudGVyKCQoJy5zbGlkZXJfX21lbicpLCAkKCcuc2xpZGVyX19tZW4tY291bnQnKSk7XHJcbiAgICBpbml0U2xpZGUoJCgnLnNsaWRlcl9fbWVuJyksICQoXCIuc2xpZGVyX19tZW4tbmF2XCIpKTtcclxuXHJcbiAgICBpbml0U2xpZGVDb3VudGVyKCQoJy5zbGlkZXJfX3dvbWFuJyksICQoJy5zbGlkZXJfX3dvbWFuLWNvdW50JykpO1xyXG4gICAgaW5pdFNsaWRlKCQoJy5zbGlkZXJfX3dvbWFuJyksICQoXCIuc2xpZGVyX193b21hbi1uYXZcIikpO1xyXG5cclxuICAgICQoJy5zZWxlY3QnKS5zZWxlY3RpemUoKTtcclxufSk7Il19
