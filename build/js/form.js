'use strict';

var feedbackForm = document.querySelector('.form');
var phoneInput = document.querySelector('.form__input-phone');
var emailInput = document.querySelector('.form__input-email');
var submitBtn = document.querySelector('.form__submit-button');
var modalPhoneInput = document.querySelector('.modal__input-phone');
var modalEmailInput = document.querySelector('.modal__input-email');
var modalSubmitBtn = document.querySelector('.modal__submit-button');

var checkInputValidity = function (input) {

  input.addEventListener('input', function () {
    input.setCustomValidity('');
    input.parentNode.classList.remove('input-wrapper--invalid');
  });

  input.addEventListener('focusout', function () {
    input.setCustomValidity('');
    input.parentNode.classList.remove('input-wrapper--invalid');
    if (input.value) {
      var validity = phoneInput.checkValidity();
      input.parentNode.classList.toggle('input-wrapper--invalid', !validity);
    }
  });
}

var checkFormValidity = function () {
  checkInputValidity(phoneInput);
  checkInputValidity(emailInput);
  checkInputValidity(modalPhoneInput);
  checkInputValidity(modalEmailInput);

  submitBtn.addEventListener('click', function () {
    if (!phoneInput.checkValidity()) {
      phoneInput.parentNode.classList.add('input-wrapper--invalid');
    }
    if (!emailInput.checkValidity()) {
      emailInput.parentNode.classList.add('input-wrapper--invalid');
    }
  });

  modalSubmitBtn.addEventListener('click', function () {
    if (!modalPhoneInput.checkValidity()) {
      modalPhoneInput.parentNode.classList.add('input-wrapper--invalid');
    }
    if (!modalEmailInput.checkValidity()) {
      modalEmailInput.parentNode.classList.add('input-wrapper--invalid');
    }
  });
};

var onSubmitForm = function () {
  feedbackForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    console.log(12);
  });
};

onSubmitForm();
checkFormValidity();

export { onSubmitForm, checkFormValidity }
