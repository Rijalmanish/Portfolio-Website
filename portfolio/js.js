// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },

//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });


    // var swiper = new Swiper(".mySwiper", {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });



    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     freeMode: true,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //   });








    let menu = document.getElementById('menue');

    let menu2 = document.getElementById('menue-close');

    function x (){

      let navmenu = document.getElementById('menue-option');

      let menuenone = document.getElementById('menuenone');

      menuenone.classList.toggle('menue-none')

      navmenu.classList.add('nav-option1');

    }

    let a= menu.addEventListener('click' , x);



    function y (){

      let menuenone = document.getElementById('menuenone');

      menuenone.classList.toggle('menue-none')

    }

    let b= menu2.addEventListener('click' , y);
