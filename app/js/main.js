$(function() {


    $('.header__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // responsive: [
        //   {
        //     breakpoint: 1900,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 1441,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 1,
        //       dots: false,
        //     }
        //   },
        //   {
        //     breakpoint: 960,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       dots: false,
        //     }
        //   },
        // ]
    });


    $('.video__slider').slick({
        centerMode: true,
        slidesToShow: 3,
        infinite: true,
        speed: 300,
        variableWidth: true,
        arrows: false,
        responsive: [{
                breakpoint: 600,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                    slidesToScroll: 1
                }
            }
        ]

    });

    $('.life__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/Left_Arrow.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/Right_Arrow.svg" alt="правая"></button>',
        asNavFor: '.life__slider-nav',
        responsive: [{
            breakpoint: 950,
            settings: {
                arrows: false
            }
        }, ]
    });
    $('.life__slider-nav').slick({
        arrows: false,
        asNavFor: '.life__slider',
        slidesToShow: 6,
        slidesToScroll: 6,
        centerMode: false,
        focusOnSelect: true,
        centerPadding: '50px',
        variableWidth: true,
        infinite: true,
        responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 5

                }
            }
        ]
    });
    $('.video__item a').fancybox({
        caption: function(instance, item) {
            return $(this).parent().find('.card-text').html();
        }
    });
});