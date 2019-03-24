

$(document).ready(function () {
  $("#owl-carousel1").owlCarousel({
    items: 1,
    // margin: 10,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    loop:true,
    autoplay:true,
    autoplayHoverPause:true
  });

  // var owl = $('.owl-carousel');
  // owl.owlCarousel();
  // $('.next').click(function () {
  //   owl.trigger('next.owl.carousel');
  // })
  // $('.prev').click(function () {
  //   owl.trigger('prev.owl.carousel', [300]);
  // })

  $('#owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    loop:true,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })
  // $('.scroll button').css({
  //   display:none
  // });
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    console.log(scroll);
   
    if(scroll>300){
      $(' .scroll button').fadeIn();
    }
    else{
      $(' .scroll button').fadeOut();
    }
  })
  //active header
  $('#header .list ul li').click(function(){
    $(this).siblings('li').removeClass('#header .list ul li active');
    $(this).addClass('#header .list ul li active');
  })
  $('#header .dropdown').click(function(){
    // $('.dropdown-menu').css("display", "block");
    $('.dropdown-menu').toggle();
  })
  $('#header .dropdown').mouseout(function(){
    // $('.dropdown-menu').css("display", "block");
    $('.dropdown-menu').css("display","none");
  })
  
  
});