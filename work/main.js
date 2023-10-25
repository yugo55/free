$(function() {
	setTimeout(function(){
		$('.start_wrapper p').fadeIn(1600);
	},500);
	setTimeout(function(){
		$('.start_wrapper').fadeOut(500);
	},2500);
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
      loop: true,
      spaceBetween: 20,

      breakpoints: {
        768: {
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 2,
          loop: false,
          spaceBetween: 20,
          
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
        }
        }
    });
  });

  const fade_bottom = 50;
  const fade_move = 100;
  const fade_time = 800;

  $(function () {
    const fade_bottom = 50;
    const fade_move = 100;
    const fade_time = 800;

    $(".scroll-fade-up").css({
      opacity: 0,
      transform: "translateY(" + fade_move + "px)",
      transition: fade_time + "ms",
    });

    $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".scroll-fade-up").each(function () {
        const this_position = $(this).offset().top;
        if (fade_position > this_position) {
          $(this).css({
            opacity: 1,
            transform: "translateY(0)",
          });
        }
      });
    });
  });

var $target = $('footer p');
var offset = 100;

$(window).on('scroll', function() {

  var scroll = $(window).scrollTop();
  var h = $(window).height();

  $target.each(function() {
    var pos = $(this).offset().top;
    if (scroll > pos - h + offset) {
      $(this).addClass('is_animated');
    }
    if(scroll < pos - h + offset){
      $(this).removeClass('is_animated');
    }
  })

}).trigger('scroll');

// worksページ
$(window).on("load", function () {
  $("main > p").addClass("load");
});

$(window).on("load", function () {
  $("main > p:first-child").addClass("load");
});