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
        responsive: [{
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

    //courses-slider
    $('.courses-slider').slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
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

//site-content padding
var headerHeight = $('.site-header').innerHeight();
var siteContent = $('.site-content');

siteContent.css("padding-top", headerHeight + 'px');

$(window).resize(function () {
    //site-content padding
    var headerHeight = $('.site-header').innerHeight();
    var siteContent = $('.site-content');

    siteContent.css("padding-top", headerHeight + 'px');
});

console.log('test');