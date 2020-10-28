$(function(){


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
  $('.video__item a').fancybox({
    caption : function( instance, item ) {
      return $(this).parent().find('.card-text').html();
    }
  });

    $('.video__slider').slick({
      centerMode:!1,
      slidesToShow:3,
      infinite:!0,
      speed:300,
      centerMode:!0,
      variableWidth:!0,
      arrows:false,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                arrows:false,
                dots:true,
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                dots:true,
                arrows:false,
                slidesToScroll: 1
              }
            }
          ]
        
    });
  
});