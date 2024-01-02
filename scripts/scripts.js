let table = new DataTable('#myTable');

$('#example').DataTable( {
  responsive: true
} );

$('#example1').DataTable( {
  responsive: true
} );

$('#example2').DataTable( {
  responsive: true
} );

var swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      hashNavigation: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: 'fade',
    cubeEffect: {
    slideShadows: false,
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });
  document.addEventListener("DOMContentLoaded", function() {
      const navEl = document.querySelector("#nav");
      window.addEventListener("scroll", () => {
      if(window.scrollY >= 56){
      navEl.classList.add('navbar-scrolled')
      } else if(window.scrollY){
          navEl.classList.remove('navbar-scrolled')
      }

    }) 
});

document.addEventListener("scroll", function() {
    var contenido = document.querySelector(".contenido");
    var rect = contenido.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.75) {
        contenido.style.opacity = 1;
        contenido.style.transform = "translateY(0)";
    }
});

