import loadSpinner from './loadSpinner';

const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...';
  const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
  const forms = document.querySelectorAll('form');
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem; color: red;';

  const postData = body => {
      return fetch('server.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(body)
      });
  };

  const requestForm = (form, event) => {
      event.preventDefault();
      form.append(statusMessage);
      statusMessage.insertAdjacentElement('afterbegin', loadSpinner());

      const formData = new FormData(form);

      let body = {};

      // for (let value of formData.entries()) {
      //   console.log(value);
      //   body[value[0]] = value[1];
      // }

      formData.forEach((value, key) => body[key] = value);

      const formReset = () => {
          form.reset();
          setTimeout(() => {
              statusMessage.textContent = '';
          }, 2000);
      };

      postData(body)
          .then(response => {
              if (response.status !== 200) {
                  throw new Error(`status: ${response.status}`);
              }
              statusMessage.textContent = successMessage;
              formReset();
          })
          .catch(error => {
              console.error(error);
              statusMessage.textContent = errorMessage;
              formReset();
          });
  };

  forms.forEach(form => form.addEventListener('submit', event => requestForm(form, event)));
};

export default sendForm;