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
  slidesPerView: 2,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  navigation:{
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    250: {
      slidesPerView: 1,
    }
  }
});

/* ============ scroll Action header =========== */
let section = document.querySelectorAll('section[id]');

section.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 40;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.menu a[href*='+ sectionId + ]').classList.add('active');
    } else {
      document.querySelector('.menu a[href*='+ sectionId + ]').classList.remove('active');
    } 
    }
  })
}

window.addEventListener('scroll', activeLink)

