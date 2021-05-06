import animate from './animate';
const togglePopup = () => {
  const popup = document.querySelector('.popup'),
      popupBtns = document.querySelectorAll('.popup-btn');

  const openModal = () => {
      popup.style.display = 'block';
      popup.style.opacity = 0;

      if (window.innerWidth >= 768) {

          animate({
              duration: 300,
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
              duration: 300,
              timing(timeFraction) {
                  return timeFraction;
              },
              draw(progress) {
                  popup.style.opacity = 1 - progress;
                  setTimeout(() => {
                      popup.style.display = 'none';
                  }, 300);
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

export default togglePopup;