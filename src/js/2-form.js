const feedBackFormEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
//console.log(feedBackFormEl);

// Функція для заповнення полів форми з localStorage
const fillFormFields = () => {
  const formDataFromLs = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLs === null) {
    return;
  }
  formData = formDataFromLs;

  for (const key in formDataFromLs) {
    if (formDataFromLs.hasOwnProperty(key)) {
      feedBackFormEl.elements[key].value = formDataFromLs[key];
    }
  }
};
fillFormFields();

// Обробник змін полів форми
const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

//Обробник сабміту форми
const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  // Очищення форми
  event.target.reset();
  // Очищення localStorage
  localStorage.removeItem('feedback-form-state');
  // Очищення об'єкта formData
  formData = {
    email: '',
    message: '',
  };
};

feedBackFormEl.addEventListener('input', onFormFieldChange);
feedBackFormEl.addEventListener('submit', onFeedbackFormSubmit);
