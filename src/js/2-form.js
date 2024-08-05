//1
const feedBackFormEl = document.querySelector('.feedback-form');
let formData = {
  email: ' ',
  message: ' ',
};
//console.log(feedBackFormEl);

//3
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
//2
const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

//4
const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
};

feedBackFormEl.addEventListener('input', onFormFieldChange);
feedBackFormEl.addEventListener('submit', onFeedbackFormSubmit);
