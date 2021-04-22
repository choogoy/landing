window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // функция добавляет "0" если число меньше 10
  const addZero = num => {
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  };

  // Timer
  const countTimer = deadline => {
    const timerHours = document.getElementById('timer-hours'),
      timerMinutes = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds');

      const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining) % 60,
          minutes = Math.floor((timeRemaining) / 60) % 60,
          hours = Math.floor(timeRemaining / 60 / 60);

          return { timeRemaining, hours, minutes, seconds };
      };

      const updateClock = () => {
        let timer = getTimeRemaining();

        if (timer.timeRemaining > 0) {
          timerHours.textContent = addZero(timer.hours);
          timerMinutes.textContent = addZero(timer.minutes);
          timerSeconds.textContent = addZero(timer.seconds);
        } else {
          timerHours.textContent = '00';
          timerMinutes.textContent = '00';
          timerSeconds.textContent = '00';
        }

      };

      updateClock();

  };

  setInterval(countTimer, 1000, '23 April 2021');

  // Menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));

  };

  toggleMenu();

  const animate = ({timing, draw, duration}) => {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      
      if (timeFraction > 1) {
        timeFraction = 1;
      }
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать её
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  };

  // Popup
  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtns = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close');

    const openModal = () => {

      popup.style.display = 'block';
      popup.style.opacity = 0;

      if (window.innerWidth >= 768) {
        
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popup.style.opacity = progress;
          }
        });

      } else {
        popup.style.opacity = 1;
      }

    };
  
    const closeModal = () => {

      if (window.innerWidth >= 768) {

        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popup.style.opacity = 1 - progress;
            setTimeout(() => {
              popup.style.display = 'none';
            }, 500);
          }
        });

      } else {
        popup.style.display = 'none';
        popup.style.opacity = 0;
      }

    };

    popupBtns.forEach(btn => btn.addEventListener('click', openModal));
    popupClose.addEventListener('click', closeModal);
  };

  togglePopup();

});