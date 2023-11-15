let swiper = new Swiper(".hero_container",{
slidePerView: 1,
spacedBetween: 30,
grabCursor: true,
speed: 900,
loop: true,
pagination: {
  el: ".swiper-pagination",
  clickable true,
 }
});

/* ========= Scroll header ========= */
let header = document.querySelector('header');

function scrollHeader(){
  let scrollY = window.pageYOffset;

  if(scrollY > 30) {
    header.classList.add('active');
  }else{
   header.classList.remove('active');
  }
}

window.addEventListener('scroll', scrollHeader);
/* ============== Cliente ===============*/
var swiper2 = new Swiper(".client_container", {
  slidePerView: 2,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  navigaton:{
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidePerView: 2,
      spaceBetween: 30,
    },
    250: {
      slidePerView: 1,
    }
  }
});

/* ============ scroll Action header =========== */
let section = document.querySelectorAll('section[id]');

