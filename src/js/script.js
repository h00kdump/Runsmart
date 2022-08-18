/* $(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg" alt="next"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
      });
  }); */

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  responsive: {
    640: {
      nav: false,
      items: 1
    },
    700: {
      nav: false,
    },
    900: {
      nav: false,
      items: 1
    }
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

