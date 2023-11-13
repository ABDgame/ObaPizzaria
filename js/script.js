let swiper = new Swiper(".hero_container",{
slidePerView: 1,
spacedBetween: 30,
grabCursor: true,
speed: 900,
loop: true,
pagination{
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
