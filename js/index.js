const initSwiper = () => {
  var mySwiper = new Swiper('.photo__carousel', {
    direction: 'horizontal',
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}

initSwiper();
