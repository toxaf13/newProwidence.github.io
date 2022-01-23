$(function(){

 
  // Slider Phone

  $('.slider-phone').slick({
  	  slidesToShow: 4,
    	slidesToScroll: 1,
    	centerMode: true,
    	variableWidth: true,
    	speed: 700,
    	focusOnSelect: true,
    	arrows: false,
    	responsive: [ 
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
  ]
  });

  // Slider User

  $('.user-nav').slick({
  	slidesToShow: 2,
    	slidesToScroll: 1,
      centerMode: true,
      asNavFor: '.info-slider',
    	variableWidth: true,
          responsive: [ 
      {
        breakpoint: 550,
        settings: {
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
  ],
    	focusOnSelect: true,
    	prevArrow:'<button class="arrows-slider slider-prew"><i class="fa fa-angle-left" aria-hidden="true"></i></buton>',
    	nextArrow: '<button class="arrows-slider slider-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });

   $('.info-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.user-nav'
  });

   



});

