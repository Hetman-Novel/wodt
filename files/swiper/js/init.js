const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Получаем все изображения с атрибутом loading="lazy"
function addLoadedClass(image) { // Функция для добавления класса к родителю изображения после его загрузки
   const parentElement = image.parentElement;
   if (image.complete) { // Проверяем, загружено ли изображение
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Добавляем событие load, чтобы добавить класс после загрузки изображения
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Перебираем все изображения и вызываем функцию addLoadedClass для каждого

/* === */

const workWithSlider = document.querySelector('.work-with__slider')
if (workWithSlider) {
   new Swiper(workWithSlider, {
      navigation: {
         prevEl: '#work-with-slider-btn-prev',
         nextEl: '#work-with-slider-btn-next',
      },
      centeredSlides: true,
      slidesPerView: 5,
      watchOverflow: true,
      spaceBetween: 37,
      loop: true,
      speed: 800,
      effect: 'slide',
      /*autoplay: {
         deley: 60000,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },*/
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      breakpoints: {
         0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
         },
         576: {
            slidesPerView: 3.3,
            spaceBetween: 20,
         },
         721: {
            slidesPerView: 3.5,
            spaceBetween: 20,
         },
         1025: {
            slidesPerView: 5,
            spaceBetween: 20,
         },
         1201: {
            slidesPerView: 5,
            spaceBetween: 37,
         }
      }
   });
}