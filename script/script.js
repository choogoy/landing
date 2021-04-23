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

  countTimer('24 April 2021');
  setInterval(countTimer, 1000, '24 April 2021');

  // Menu
  const toggleMenu = () => {
    const menu = document.querySelector('menu');
    const handlerMenu = () => menu.classList.toggle('active-menu');

    document.addEventListener('click', event => {
      let target = event.target;
    
      if (target.classList.contains('close-btn')) {
        handlerMenu();
      }

      if (target.closest('.menu')) {
        handlerMenu();
      } else if (menu.classList.contains('active-menu') && !target.closest('menu')) {
        handlerMenu();
      }

      const smoothScroll = id => {
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      };

      if (target.closest('a[href="#service-block"]')) {
        event.preventDefault();
        smoothScroll('service-block');
      }

      if (target.closest('li>a')) {
        event.preventDefault();
        const blockID = target.getAttribute('href').substr(1);
        smoothScroll(blockID);
        handlerMenu();
      }

    });

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
      popupBtns = document.querySelectorAll('.popup-btn');

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

    popup.addEventListener('click', event => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        closeModal();
      } else {
        target = target.closest('.popup-content');
        
        if (!target) {
          closeModal();
        }
      }

    });
  };

  togglePopup();

  // Tabs

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');
    
    const toggleTabContent = index => {

      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }

    };
    
    tabHeader.addEventListener('click', event => {
      let target = event.target.closest('.service-header-tab');
      
      if (target) {
        tab.forEach((item, index) => {
          if (item === target) {
           toggleTabContent(index);
          }
        });
      }

    });
  };

  tabs();

});