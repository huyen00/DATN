$(document).ready(function(){
    $('.multiple-items').slick({
        prevArrow: '<div class="icon_slick icon_prev"><i class="fa-solid fa-chevron-left"></i> </div>',
        nextArrow: '<div class="icon_slick icon_next"><i class="fa-solid fa-chevron-right"></i></div>',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3
      });
  });