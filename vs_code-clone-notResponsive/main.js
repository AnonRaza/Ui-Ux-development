var swiper = new Swiper(".mySwiper",{
    slidesPerView:3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay:4000,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        550:{
            slidesPerView:2,
        },
        800:{
            slidesPerView:3,
        },
        1000:{
            slidesPerView:3,
        },
    },
   
  });