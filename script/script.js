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

  countTimer('29 April 2021');
  setInterval(countTimer, 1000, '29 April 2021');

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

  // Slider

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      slider = document.querySelector('.portfolio-content'),
      dots = document.querySelector('.portfolio-dots');
   
    let currentSlide = 0,
      interval;

    const renderDots = (parent, count, currentClass, activeClass) => {
      for (let i = 0; i < count; i++) {
        let newDot = document.createElement('li');
        if (i === 0) {
          newDot.classList.add(activeClass);
        } 
        newDot.classList.add(currentClass);
        parent.insertAdjacentElement('beforeend', newDot);
      }
    };
    
    renderDots(dots, slide.length, 'dot', 'dot-active');
    const dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => elem[index].classList.remove(strClass);
    const nextSlide = (elem, index, strClass) => elem[index].classList.add(strClass);

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', event => {
      event.preventDefault();

      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }
      
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', event => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', event => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
      }
    });
    
    startSlide(1500);
  };

  slider();

  // Our team

  const command = document.getElementById('command');

  const changeImage = event => {
    const target = event.target;
    const image = target.closest('.command__photo');

    if (image) {
      const newSrc = image.dataset.img;
      image.dataset.img = image.src;
      image.src = newSrc;
    }
  };

  command.addEventListener('mouseover', changeImage);
  command.addEventListener('mouseout', changeImage);

  // Calculator

  const calcBlock = document.querySelector('.calc-block');

  calcBlock.addEventListener('input', event => {
    const input = event.target.closest('input');
    if (input) {
      input.value = input.value.replace(/\D/gi, '').replace(/^0/gi, ''); // только цифры и первая не ноль 
    }
  });

  // Footer form validator
 
  const name = document.getElementById('form2-name');  
  const email = document.getElementById('form2-email');
  const phone = document.getElementById('form2-phone');
  const message = document.getElementById('form2-message');

  email.addEventListener('blur', () => {

    email.value = email.value .replace(/[^a-z@_.!~*'\-]/gi, '')
                              .replace(/-+/g, '-')
                              .replace(/^-/g, '')
                              .replace(/-$/g, '')
                              .replace(/ +/g, '')
                              .replace(' ', '');
  });

  name.addEventListener('blur', () => {

    name.value = name.value .replace(/[^а-яё -]/gi, '')
                            .replace(/-+/g, '-')
                            .replace(/ +/g, ' ')
                            .replace(/^-/g, '')
                            .replace(/^ /g, '')
                            .replace(/-$/g, '')
                            .replace(/ $/g, '');

    name.value = name.value[0].toUpperCase() + name.value.slice(1).toLowerCase();

    // вот он костылик =) я целый день думал как это сделать...
    let arr = [];
    name.value.split(' ').forEach(elem => arr.push(elem[0].toUpperCase() + elem.slice(1)));
    name.value = arr.join(' ');

  });

  message.addEventListener('blur', () => {

    message.value = message.value .replace(/[^а-яё -]/gi, '')
                                  .replace(/-+/g, '-')
                                  .replace(/ +/g, ' ')
                                  .replace(/^-/g, '')
                                  .replace(/^ /g, '')
                                  .replace(/-$/g, '')
                                  .replace(/ $/g, '');
  });

  phone.addEventListener('blur', () => {

    phone.value = phone.value .replace(/[^0-9()-]/gi, '')
                              .replace(/-+/g, '-')
                              .replace(/^-/g, '')
                              .replace(/-$/g, '');
  });

});