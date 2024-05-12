import throttle from 'lodash.throttle';
const formFeedback = document.querySelector('.feedback-form');
formFeedback.addEventListener(
  'input',

  throttle(() => {
    const formInfo = {
      email: formFeedback.elements.email.value,
      message: formFeedback.elements.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
  }, 500)
);
document.addEventListener('DOMContentLoaded', () => {
  const parsedInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(parsedInfo);
  if (!parsedInfo) {
    formFeedback.elements.email.value = '';
    formFeedback.elements.message.value = '';
  } else {
    formFeedback.elements.email.value = parsedInfo.email;
    formFeedback.elements.message.value = parsedInfo.message;
  }
});
formFeedback.addEventListener('submit', e => {
  e.preventDefault();
  const parsedInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(parsedInfo);
  localStorage.removeItem('feedback-form-state');
  formFeedback.reset();
});
