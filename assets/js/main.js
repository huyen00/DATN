$(document).ready(function(){
    $('.multiple-items').slick({
        prevArrow: '<div class="icon_slick icon_prev"><i class="fa-solid fa-chevron-left"></i> </div>',
        nextArrow: '<div class="icon_slick icon_next"><i class="fa-solid fa-chevron-right"></i></div>',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3
      });

      $(".item_question").click(function(event){
        $(`#link_${id}`).removeClass('active');
        var id = $(this).attr("id").split('_')[1];
        $(".sub_question").hide();
        $(`#panel_${id}`).show();
        $(`#link_${id}`).addClass('active');
      });

    //   
    $(".list_nav").click(function(){
        $(".list_nav_sub").css("display").
    })
  });