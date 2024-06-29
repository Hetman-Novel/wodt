if (window.matchMedia("(min-width: 640px)").matches) {

   $('.marquee-top').marquee({
      speed: 5,
      duration: 95000,
      direction: 'left',
      duplicated: true,
      pauseOnHover: true,
   });
   $('.marquee-middle').marquee({
      speed: 5,
      duration: 95000,
      direction: 'left',
      duplicated: true,
      pauseOnHover: true,
   });
   $('.marquee-bottom').marquee({
      speed: 5,
      duration: 95000,
      delayBeforeStart: 0,
      direction: 'right',
      duplicated: true,
      pauseOnHover: true,
   });

} else {

   $('.marquee-top').marquee({
      speed: 12,
      duration: 95000,
      direction: 'left',
      duplicated: true,
      pauseOnHover: true,
   });
   $('.marquee-middle').marquee({
      speed: 12,
      duration: 95000,
      direction: 'left',
      duplicated: true,
      pauseOnHover: true,
   });
   $('.marquee-bottom').marquee({
      speed: 12,
      duration: 95000,
      delayBeforeStart: 0,
      direction: 'right',
      duplicated: true,
      pauseOnHover: true,
   });

}