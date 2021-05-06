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

export default toggleMenu;