$(document).ready(function () {
    function initBgCover(context) {
        if (!context) context = $('body');
        context.find('.bg-cover').each(function () {
            var holder = $(this);
            var image = holder.find('> img').hide();
            var imageSrc = image.prop('src');
            holder.css({
                backgroundImage: 'url(' + imageSrc + ')',
            });
        });
    }

    initBgCover();

    $(".counts").countUp({
        time: 3000,
        delay: 10,
    });

    // slider-col-4
    $('.slider-col-4').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  adaptiveHeight: true,
                    dots: true
                }
            }
        ]
    });

   /* smooth scroll*/
    $('a.js-has-smooth[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});