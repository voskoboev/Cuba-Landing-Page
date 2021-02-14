const initSwiper = () => {
  var mySwiper = new Swiper('.photo__carousel', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}

initSwiper();

const moveReadMoreArrow = () => {
  const arrow = document.querySelector('.benefit__readmore');
}